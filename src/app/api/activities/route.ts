import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const q = params.get('q') || '';
  const category = params.get('category') || '';
  const startDate = params.get('startDate') || '';
  const endDate = params.get('endDate') || '';
  const sort = params.get('sort') || '';

  const where: Prisma.ActivityWhereInput = {};
  const orderBy: Prisma.ActivityOrderByWithRelationInput = {};

  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { location: { contains: q, mode: 'insensitive' } },
    ];
  }

  if (category) {
    where.category = category;
  }

  if (startDate || endDate) {
    where.date = {};
    if (startDate) where.date.gte = new Date(startDate);
    if (endDate) where.date.lte = new Date(endDate);
  }

  if (sort === 'price-asc') orderBy.price = 'asc';
  else if (sort === 'price-desc') orderBy.price = 'desc';
  else if (sort === 'date') orderBy.date = 'asc';

  const [data, categoriesRaw] = await Promise.all([
    prisma.activity.findMany({
      where,
      orderBy: Object.keys(orderBy).length > 0 ? orderBy : undefined,
    }),
    prisma.activity.findMany({ distinct: ['category'], select: { category: true } }),
  ]);

  const categories = categoriesRaw.map((c) => c.category);

  const formatted = data.map((a) => ({
    ...a,
    date: a.date.toISOString().split('T')[0],
  }));

  return NextResponse.json({ data: formatted, count: formatted.length, categories });
}
