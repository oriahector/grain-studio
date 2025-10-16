import React from 'react'

export function Contact() {
  return (
    <section
      id="contact"
      className="section container-px mx-auto py-32 bg-[--color-fg] text-[--color-bg]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[9vw] md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-[--color-accent] mb-10">
          LET’S TALK
        </h2>

        <form
          className="mx-auto max-w-3xl grid gap-4 md:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Nombre"
            className="rounded-none border-b border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg]"
          />
          <input
            placeholder="Apellidos"
            className="rounded-none border-b border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg]"
          />
          <input
            placeholder="Email"
            className="md:col-span-2 rounded-none border-b border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg]"
          />
          <textarea
            placeholder="Cuéntanos cosas bonitas"
            rows={5}
            className="md:col-span-2 rounded-none border-b border-[--color-bg]/40 bg-transparent p-3 text-[--color-bg] placeholder-[--color-bg]/70 outline-none focus:border-[--color-bg]"
          />
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              className="inline-block bg-[--color-accent] text-white px-8 py-3 font-semibold text-sm tracking-wide uppercase hover:opacity-90 transition"
            >
              Enviar →
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}