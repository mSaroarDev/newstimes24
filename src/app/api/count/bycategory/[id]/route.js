import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const prisma = new PrismaClient();
  const categoryId = parseInt(params.id);

  try {
    const posts = await prisma.posts.count({
      where: {
        category_id: categoryId,
      },
    });

    return NextResponse.json({ msg: "success", totalPosts: posts });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: "error" });
  }
}
