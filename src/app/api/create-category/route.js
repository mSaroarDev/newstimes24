import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const formData = await req.json();

    await prisma.categories.create({
      data: formData,
    });

    return NextResponse.json(
      { msg: "success", data: formData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}

