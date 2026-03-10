import { PrismaClient } from '@prisma/client';
import { hotels, events, activities, places } from './seed-data';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.activity.deleteMany();
  await prisma.event.deleteMany();
  await prisma.hotel.deleteMany();
  await prisma.place.deleteMany();

  // Seed hotels
  await prisma.hotel.createMany({ data: hotels });
  console.log(`Seeded ${hotels.length} hotels`);

  // Seed events (convert date strings to Date objects)
  await prisma.event.createMany({
    data: events.map((e) => ({ ...e, date: new Date(e.date) })),
  });
  console.log(`Seeded ${events.length} events`);

  // Seed activities (convert date strings to Date objects)
  await prisma.activity.createMany({
    data: activities.map((a) => ({ ...a, date: new Date(a.date) })),
  });
  console.log(`Seeded ${activities.length} activities`);

  // Seed places
  await prisma.place.createMany({ data: places });
  console.log(`Seeded ${places.length} places`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
