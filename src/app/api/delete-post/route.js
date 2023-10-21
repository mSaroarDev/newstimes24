import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function handler(req, res) {
  try {
    const deletedPost = await prisma.posts.delete({
      where: {
        id: 1,
      },
    });

    return NextResponse.json(
      { msg: "success", data: deletedPost },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error" }, { status: 406 });
  }
}

export { handler as GET, handler as POST };
