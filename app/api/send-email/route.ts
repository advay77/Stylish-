import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({

      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "admin@stylevsStyle.com", // Replace with admin email
      subject: `New Order - ${orderData.orderId}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${orderData.orderId}</p>
        <p><strong>Customer:</strong> ${orderData.customer.name}</p>
        <p><strong>Email:</strong> ${orderData.customer.email}</p>
        <p><strong>Phone:</strong> ${orderData.customer.phone}</p>
        <p><strong>Address:</strong> ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.state} - ${orderData.customer.pincode}</p>
        
        <h3>Order Items:</h3>
        <ul>
          ${orderData.items
            .map(
              (item: any) => `
            <li>${item.name} - ${item.fabric} (${item.color}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}</li>
          `,
            )
            .join("")}
        </ul>
        
        <p><strong>Total Amount:</strong> ₹${orderData.total}</p>
        <p><strong>Order Time:</strong> ${new Date(orderData.timestamp).toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
