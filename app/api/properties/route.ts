import { NextResponse } from "next/server";
import { properties } from "@/lib/properties";

export async function GET() {
  return NextResponse.json({ properties });
}
