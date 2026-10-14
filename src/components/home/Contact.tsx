'use client';

import { useActionState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { sendEmail } from '@/services/emailService';

type State = { status: 'idle' | 'ok' | 'error'; message?: string };

async function submit(_: State, form: FormData): Promise<State> {
  try {
    await sendEmail({
      name: String(form.get('name')),
      lastName: String(form.get('lastName')),
      email: String(form.get('email')),
      message: String(form.get('message')),
    });
    return { status: 'ok' };
  } catch (err) {
    return {
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}

const field =
  'w-full border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted focus:border-klein md:text-xl';

export function Contact() {
  const [state, action, pending] = useActionState(submit, { status: 'idle' });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grid gap-10 pt-11 pb-14 md:grid-cols-[1fr_1.07fr] md:gap-10 md:pt-16 lg:gap-16"
    >
      <div>
        <p className="eyebrow">Have something in mind?</p>
        <h2
          id="contact-heading"
          className="mt-5 text-[clamp(3.25rem,7vw,6.25rem)] leading-[1.05]"
        >
          Let&apos;s make it.
        </h2>
      </div>

      {state.status === 'ok' ? (
        <p role="status" className="self-end text-xl md:text-2xl">
          Thanks — your message is on its way. We&apos;ll get back to you soon.
        </p>
      ) : (
        <form action={action} className="flex flex-col gap-4 self-end">
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="sr-only">Name</span>
              <input
                name="name"
                required
                autoComplete="given-name"
                placeholder="Name"
                className={field}
              />
            </label>
            <label>
              <span className="sr-only">Surname</span>
              <input
                name="lastName"
                required
                autoComplete="family-name"
                placeholder="Surname"
                className={field}
              />
            </label>
          </div>
          <label>
            <span className="sr-only">Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              className={field}
            />
          </label>
          <label>
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What's on your mind?"
              className={`${field} resize-none`}
            />
          </label>

          <div className="mt-4 flex items-center justify-between gap-4">
            {state.status === 'error' ? (
              <p role="alert" className="eyebrow text-red-700">
                Couldn&apos;t send: {state.message}
              </p>
            ) : (
              <span />
            )}
            <button
              type="submit"
              disabled={pending}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-klein px-6 py-3 font-mono text-xs text-white uppercase transition-opacity disabled:cursor-wait disabled:opacity-60"
            >
              {pending ? 'Sending…' : 'Send'}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:rotate-45"
              />
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
