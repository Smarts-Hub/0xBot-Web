import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { token, name, price, author, description, url, email } = body;

    if (!token)
      return NextResponse.json({ message: "Turnstile token missing" }, { status: 400 });

    const secret = process.env.TURNSTILE_SECRET_KEY;
    const cfRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const cfData = await cfRes.json();

    if (!cfData.success) {
      return NextResponse.json({ message: "Turnstile verification failed" }, { status: 400 });
    }

    const newAddon = await prisma.addon.create({
      data: {
        name,
        price: parseFloat(price),
        author,
        email,
        description,
        url,
        verified: false
      },
    });

    return NextResponse.json({ message: "Addon published successfully", addon: newAddon });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const addons = await prisma.addon.findMany({
      take: 50, // obtenemos los primeros 50
      orderBy: { createdAt: "desc" }, // opcional: ordenados por más recientes
    });

    return NextResponse.json({ addons });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
