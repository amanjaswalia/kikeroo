import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const q = params.get('q') || '';
  const priceRange = params.get('priceRange') || '';
  const rating = params.get('rating') || '';
  const amenities = params.get('amenities') || '';
  const sort = params.get('sort') || '';

  const where: Prisma.HotelWhereInput = {};
  const orderBy: Prisma.HotelOrderByWithRelationInput = {};

  // Text search
  if (q) {
    where.OR = [
      { city: { contains: q, mode: 'insensitive' } },
      { country: { contains: q, mode: 'insensitive' } },
      { name: { contains: q, mode: 'insensitive' } },
    ];
  }

  // Price range filter (supports multiple ranges like "$0-$100,$200-$500")
  if (priceRange) {
    const ranges = priceRange.split(',');
    const priceConditions: Prisma.HotelWhereInput[] = ranges.map((r) => {
      if (r === '$0-$100') return { price: { lte: 100 } };
      if (r === '$100-$200') return { price: { gt: 100, lte: 200 } };
      if (r === '$200-$500') return { price: { gt: 200, lte: 500 } };
      if (r === '$500+') return { price: { gt: 500 } };
      return {};
    });
    if (priceConditions.length > 0) {
      where.AND = [{ OR: priceConditions }];
    }
  }

  // Rating filter
  if (rating) {
    if (rating === '5 stars') where.rating = { gte: 4.8 };
    else if (rating === '4+ stars') where.rating = { gte: 4.0 };
    else if (rating === '3+ stars') where.rating = { gte: 3.0 };
  }

  // Amenities filter (must have all selected amenities)
  if (amenities) {
    where.amenities = { hasEvery: amenities.split(',') };
  }

  // Sorting
  if (sort === 'price-asc') orderBy.price = 'asc';
  else if (sort === 'price-desc') orderBy.price = 'desc';
  else if (sort === 'rating') orderBy.rating = 'desc';

  const data = await prisma.hotel.findMany({
    where,
    orderBy: Object.keys(orderBy).length > 0 ? orderBy : undefined,
  });

  return NextResponse.json({ data, count: data.length });
}
