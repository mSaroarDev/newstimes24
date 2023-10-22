import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    const categoryId = parseInt(params.id);

    const res = await prisma.categories.delete({
      where: {
        id: categoryId,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}
