import { mockItems } from "@/lib/data"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  return NextResponse.json(mockItems)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newItem = {
      id: Math.max(...mockItems.map((item) => item.id)) + 1,
      ...body,
    }

    mockItems.push(newItem)

    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create item" }, { status: 400 })
  }
}
