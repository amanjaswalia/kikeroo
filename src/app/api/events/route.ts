import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const q = params.get('q') || '';
  const type = params.get('type') || '';
  const startDate = params.get('startDate') || '';
  const endDate = params.get('endDate') || '';
  const sort = params.get('sort') || '';

  const where: Prisma.EventWhereInput = {};
  const orderBy: Prisma.EventOrderByWithRelationInput = {};

  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { location: { contains: q, mode: 'insensitive' } },
    ];
  }

  if (type) {
    where.type = type;
  }

  if (startDate || endDate) {
    where.date = {};
    if (startDate) where.date.gte = new Date(startDate);
    if (endDate) where.date.lte = new Date(endDate);
  }

  if (sort === 'price-asc') orderBy.price = 'asc';
  else if (sort === 'price-desc') orderBy.price = 'desc';
  else if (sort === 'date') orderBy.date = 'asc';

  const [data, typesRaw] = await Promise.all([
    prisma.event.findMany({
      where,
      orderBy: Object.keys(orderBy).length > 0 ? orderBy : undefined,
    }),
    prisma.event.findMany({ distinct: ['type'], select: { type: true } }),
  ]);

  const types = typesRaw.map((t) => t.type);

  // Format dates to YYYY-MM-DD strings for client
  const formatted = data.map((e) => ({
    ...e,
    date: e.date.toISOString().split('T')[0],
  }));

  return NextResponse.json({ data: formatted, count: formatted.length, types });
}
