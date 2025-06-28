import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Add order to Firestore
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      createdAt: new Date(),
      status: "pending",
    })

    return NextResponse.json({
      success: true,
      orderId: docRef.id,
    })
  } catch (error) {
    console.error("Error storing order:", error)
    return NextResponse.json(
      {
        error: "Failed to store order",
      },
      { status: 500 },
    )
  }
}
