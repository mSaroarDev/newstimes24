// Import the necessary Prisma and Next.js modules
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Define the GET method
export async function GET(request, { params }) {
  const { id } = params;

  const prisma = new PrismaClient();

  let post = await prisma.posts.findMany({
    where: {
      category_id: parseInt(id),
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
  });

  if (!post) {
    return NextResponse.error("Post not found", 404);
  }

  await prisma.$disconnect();

  return NextResponse.json({ msg: "success", data: post });
}
