import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
  const data = await request.json();
  const menuItem = await prisma.menuItem.create({
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      category: data.category
    }
  });
  return new Response(JSON.stringify(menuItem), { status: 201 });
}

export async function DELETE({ params }) {
  await prisma.menuItem.delete({
    where: { id: parseInt(params.id) }
  });
  return new Response(null, { status: 204 });
}