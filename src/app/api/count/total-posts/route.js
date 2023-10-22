import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.posts.count();

    return NextResponse.json({ msg: "success", totalPosts: posts });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: "error" });
  }
}
