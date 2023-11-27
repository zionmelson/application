import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get data from database

    return NextResponse.json([
      {
        id: 1,
        name: "John Doe",
        email: "",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "",
      },
    ]);
  } catch (error) {}
}
