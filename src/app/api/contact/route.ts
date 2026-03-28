import { Resend } from "resend"
import { z } from "zod"

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = ContactSchema.safeParse(await req.json())
  if (!body.success) {
    return Response.json({ error: body.error }, { status: 400 })
  }

  const { name, email, message } = body.data

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL as string,
    to: "antoine.pulon@gmail.com",
    replyTo: email,
    subject: `Portfolio contact — ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true })
}
