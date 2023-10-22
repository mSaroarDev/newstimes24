import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const categories = await prisma.categories.count();

    return NextResponse.json({ msg: "success", totalCategories: categories });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: "error" });
  }
}
