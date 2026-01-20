import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  package: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const text = `
🔔 *Новая заявка с сайта!*

📧 Email: ${data.email}
${data.phone ? `📱 Телефон: ${data.phone}` : ''}
${data.package ? `📦 Пакет: ${data.package}` : ''}
${data.message ? `\n💬 Сообщение:\n${data.message}` : ''}

📅 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim()

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('Telegram API error:', error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
