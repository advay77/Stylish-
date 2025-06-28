// Email service using Nodemailer (for backend)
export interface OrderData {
  orderId: string
  items: any[]
  total: number
  customer: any
  timestamp: string
}

export async function sendOrderNotification(orderData: OrderData) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return await response.json()
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
