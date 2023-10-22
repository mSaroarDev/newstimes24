import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const prisma = new PrismaClient();
    const author = await prisma.profiles.findUnique({
      where: {
        profile_id: parseInt(id),
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ msg: "success", data: author }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}
