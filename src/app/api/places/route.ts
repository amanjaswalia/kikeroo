import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const q = params.get('q') || '';
  const country = params.get('country') || '';

  const where: Prisma.PlaceWhereInput = {};

  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { country: { contains: q, mode: 'insensitive' } },
    ];
  }

  if (country) {
    where.country = country;
  }

  const [data, countriesRaw] = await Promise.all([
    prisma.place.findMany({ where }),
    prisma.place.findMany({ distinct: ['country'], select: { country: true }, orderBy: { country: 'asc' } }),
  ]);

  const countries = countriesRaw.map((c) => c.country);

  return NextResponse.json({ data, count: data.length, countries });
}
