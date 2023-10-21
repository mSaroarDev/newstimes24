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

// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//   const { id } = params;

//   const prisma = new PrismaClient();

//   let post = await prisma.categories.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });

//   if (!post) {
//     return NextResponse.error("Post not found", 404);
//   }

//   await prisma.$disconnect();

//   return NextResponse.json({ msg: "success", data: post });
// }
