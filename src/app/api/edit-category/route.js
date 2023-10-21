import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const formData = await req.json();

    const res = await prisma.categories.update({
      where: {
        id: parseInt(formData.id),
      },
      data: formData,
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}
