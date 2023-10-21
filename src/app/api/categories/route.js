import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const categories = await prisma.categories.findMany();

    return NextResponse.json(
      { msg: "success", data: categories },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}
