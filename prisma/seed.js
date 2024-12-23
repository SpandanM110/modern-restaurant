import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

try {
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
  console.log('Database seeded successfully');
} catch (error) {
  console.error('Error seeding database:', error);
} finally {
  await prisma.$disconnect();
}