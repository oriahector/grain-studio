import { Button } from '@/components/ui/Button'
import React from 'react'

export function Contact() {
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
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Nombre"
            className="rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <input
            placeholder="Apellidos"
            className="rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <input
            placeholder="Email"
            className="md:col-span-2 rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <textarea
            placeholder="Let's talk about you have above your arms"
            rows={5}
            className="md:col-span-2 rounded-none border-b-3 border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg] uppercase"
          />
          <div className="md:col-span-2 flex justify-center mt-6">
            <Button className="text-2xl" type="submit">Send</Button>
          </div>
        </form>
      </div>
    </section>
  )
}