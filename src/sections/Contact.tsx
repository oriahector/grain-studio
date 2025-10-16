import React from 'react'

export function Contact() {
  return (
    <section id="contact" className="section container-px mx-auto py-24 bg-white">
      <h2 className="text-4xl font-extrabold">Let’s talk</h2>
      <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Nombre" className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none focus:border-white/30 md:col-span-1" />
        <input placeholder="Apellidos" className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none focus:border-white/30 md:col-span-1" />
        <input placeholder="Email" className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none focus:border-white/30 md:col-span-2" />
        <textarea placeholder="Cuéntanos cosas bonitas" rows={5} className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none focus:border-white/30 md:col-span-2" />
        <div className="md:col-span-2">
          <button className="rounded-lg bg-white text-neutral-900 px-4 py-2 font-medium">Enviar →</button>
        </div>
      </form>
    </section>
  )
}