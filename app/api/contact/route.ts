import { NextResponse } from "next/server";

/**
 * Contact endpoint. Landing-page build — no database. It validates the
 * payload and returns success; wire an email provider (Resend) or CRM here
 * when the site moves to a fullstack build.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Name and a valid email are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
