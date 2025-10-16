import React from 'react'
import { Button } from '@/components/ui/Button'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = React.useState<'idle'|'sending'|'ok'|'error'>('idle')
  const [errorMsg, setErrorMsg] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus('sending')

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error('Faltan variables de entorno de EmailJS')
      }

      const payload = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
      }

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Request failed')
      }

      setStatus('ok')
      setFormData({ name: '', lastName: '', email: '', message: '' })
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err?.message ?? 'Error desconocido')
    }
  }

  return (
    <section
      id="contact"
      className="section container-px py-32 bg-[--color-fg] text-[--color-bg]"
    >
      <div className="text-center w-full">
        <h2 className="text-15xl leading-none mb-10">
            CONTACT
        </h2>

        <form
          className="w-full mt-20 max-w-3xl grid gap-4 md:grid-cols-2 font-sans uppercase ml-auto text-2xl font-semibold"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Nombre"
            className="rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="Apellidos"
            className="rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Email"
            className="md:col-span-2 rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            placeholder="Let's talk about you have above your arms"
            rows={5}
            className="md:col-span-2 rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <div className="md:col-span-2 flex justify-center mt-6">
            <Button className="text-2xl" type="submit">Send</Button>
          </div>
          {status==='ok' && <p className="md:col-span-2 text-green-700 text-sm text-center">¡Mensaje enviado!</p>}
          {status==='error' && <p className="md:col-span-2 text-red-700 text-sm text-center">Error al enviar: {errorMsg}</p>}
        </form>
      </div>
    </section>
  )
}