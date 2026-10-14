'use client';

import { useActionState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/config/site';
import { sendEmail } from '@/services/emailService';
import type { ContactFormData } from '@/types';

type State = { status: 'idle' | 'ok' | 'error'; fields?: ContactFormData };

async function submit(_: State, form: FormData): Promise<State> {
  const fields: ContactFormData = {
    name: String(form.get('name')),
    lastName: String(form.get('lastName')),
    email: String(form.get('email')),
    message: String(form.get('message')),
  };
  try {
    await sendEmail(fields);
    return { status: 'ok' };
  } catch (err) {
    console.error('Contact form:', err);
    // React resets the form after the action; hand the values back as
    // defaultValue so a failed send doesn't wipe what the visitor wrote.
    return { status: 'error', fields };
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
      <div className="reveal">
        <p className="eyebrow">Have something in mind?</p>
        <h2
          id="contact-heading"
          className="mt-5 text-[clamp(3.25rem,7vw,6.25rem)] leading-[1.05]"
        >
          Let&apos;s make it.
        </h2>
      </div>

      {state.status === 'ok' ? (
        <p role="status" className="animate-rise self-end text-xl md:text-2xl">
          Thanks — your message is on its way. We&apos;ll get back to you soon.
        </p>
      ) : (
        <form action={action} className="flex flex-col gap-4 self-end">
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="sr-only">Name</span>
              <input
                name="name"
                defaultValue={state.fields?.name}
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
                defaultValue={state.fields?.lastName}
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
              defaultValue={state.fields?.email}
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
              defaultValue={state.fields?.message}
              required
              rows={4}
              placeholder="What's on your mind?"
              className={`${field} resize-none`}
            />
          </label>

          <div className="mt-4 flex items-center justify-between gap-4">
            {state.status === 'error' ? (
              <p
                role="alert"
                className="max-w-xs animate-fade eyebrow text-red-700"
              >
                Something went wrong sending your message. Try again or write to
                us on{' '}
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Instagram
                </a>
                .
              </p>
            ) : (
              <span />
            )}
            <button
              type="submit"
              disabled={pending}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-klein px-6 py-3 font-mono text-xs text-white uppercase transition-[opacity,scale] duration-150 ease-out active:scale-[0.97] disabled:cursor-wait disabled:opacity-60"
            >
              {pending ? 'Sending…' : 'Send'}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-[rotate] duration-200 ease-out group-hover:rotate-45"
              />
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
