import { NextResponse } from "next/server";
import { addInquiry, listInquiries } from "@/lib/inquiries";

export async function GET() {
  return NextResponse.json({ inquiries: listInquiries() });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message, propertyId } = body ?? {};

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const inquiry = addInquiry({ name, email, phone, message, propertyId });
  return NextResponse.json({ inquiry }, { status: 201 });
}
