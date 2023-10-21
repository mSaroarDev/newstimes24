import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function handler(req, res) {
  const formData = await req.json();
  const {
    post_title,
    post_excerpt,
    post_content,
    featured_image,
    created_by,
    category_id,
  } = formData;

  try {
    const post = await prisma.posts.create({
      data: {
        post_title,
        post_excerpt,
        post_content,
        featured_image,
        created_by: parseInt(created_by),
        category_id: parseInt(category_id),
      },
    });

    return NextResponse.json({ msg: "success", data: post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}

export { handler as GET, handler as POST };
