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
  const [errors, setErrors] = React.useState({
    name: false,
    lastName: false,
    email: false,
    message: false
  })
  const [status, setStatus] = React.useState<'idle'|'sending'|'ok'|'error'>('idle')
  const [errorMsg, setErrorMsg] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === ''
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

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
        <h2 className="text-[length:var(--title-size)] leading-none mb-10">
            LET'S TALK
        </h2>

        <form
          noValidate
          className="w-full mt-20 max-w-3xl grid gap-4 md:grid-cols-2 font-arimo ml-auto text-2xl font-semibold"
          onSubmit={handleSubmit}
        >
                    <div className="relative">
            <input
              name="name"
              value={formData.name}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, name: e.target.value }))
                setErrors(prev => ({ ...prev, name: false }))
              }}
              placeholder="Nombre"
              className={`w-full rounded-none border-b-3 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none uppercase transition-colors ${
                errors.name ? 'border-red-700' : 'border-[--color-bg]/40 focus:border-[--color-bg]'
              }`}
            />
            {errors.name && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-red-700">
                Field Required
              </span>
            )}
          </div>
          <div className="relative">
            <input
              name="lastName"
              value={formData.lastName}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, lastName: e.target.value }))
                setErrors(prev => ({ ...prev, lastName: false }))
              }}
              placeholder="Apellidos"
              className={`w-full rounded-none border-b-3 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none uppercase transition-colors ${
                errors.lastName ? 'border-red-700' : 'border-[--color-bg]/40 focus:border-[--color-bg]'
              }`}
            />
            {errors.lastName && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-red-700">
                Field Required
              </span>
            )}
          </div>
          <div className="relative md:col-span-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, email: e.target.value }))
                setErrors(prev => ({ ...prev, email: false }))
              }}
              placeholder="Email"
              className={`w-full rounded-none border-b-3 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none uppercase transition-colors ${
                errors.email ? 'border-red-700' : 'border-[--color-bg]/40 focus:border-[--color-bg]'
              }`}
            />
            {errors.email && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-red-700">
                Valid Email required
              </span>
            )}
          </div>
          <div className="relative md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, message: e.target.value }))
                setErrors(prev => ({ ...prev, message: false }))
              }}
              placeholder="Let's talk about you have above your arms"
              rows={5}
              className={`w-full rounded-none border-b-3 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none uppercase transition-colors ${
                errors.message ? 'border-red-700' : 'border-[--color-bg]/40 focus:border-[--color-bg]'
              }`}
            />
            {errors.message && (
              <span className="absolute right-0 top-4 text-red-700 uppercase">
                Field Required
              </span>
            )}
          </div>
          
          <div className="md:col-span-2 flex justify-start mt-6 text-2xl md:text-5xl uppercase">
            {status !== 'sending' && <Button type="submit">Send </Button> }
            {status === 'sending' && <p>Sending...</p>}
            {status === 'ok' && <p>&nbsp;| Message sent successfully!</p>}
          </div>
          
          {status==='error' && <p>There was an error sending the message: {errorMsg}</p>}
        </form>
      </div>
    </section>
  )
}