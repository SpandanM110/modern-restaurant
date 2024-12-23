import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create menu items
  await prisma.menuItem.createMany({
    data: [
      {
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with herbs and lemon",
        price: 24.99,
        category: "Main Course"
      },
      {
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with black truffle",
        price: 22.99,
        category: "Main Course"
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil",
        price: 12.99,
        category: "Starters"
      }
    ]
  });

  // Create some sample reservations
  await prisma.reservation.createMany({
    data: [
      {
        name: "John Doe",
        email: "john@example.com",
        date: new Date("2024-12-24"),
        time: "19:00",
        guests: 2,
        specialRequests: "Window seat preferred"
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        date: new Date("2024-12-25"),
        time: "20:00",
        guests: 4,
        specialRequests: "Birthday celebration"
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });