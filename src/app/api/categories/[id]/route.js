import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const prisma = new PrismaClient();
    const category = await prisma.categories.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    await prisma.$disconnect();

    return NextResponse.json(
      { msg: "success", data: category },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}
