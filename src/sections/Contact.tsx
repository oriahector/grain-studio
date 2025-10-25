import React from 'react';
import { Button } from '@/components/ui/Button';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FormField } from '@/components/ui/FormField';
import { EMAIL_CONFIG } from '@/config/constants';
import type { ContactFormData, FormErrors, FormStatus } from '@/types';

export function Contact() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<FormErrors>({
    name: false,
    lastName: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = React.useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleValidateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidateForm()) {
      return;
    }

    setErrorMsg('');
    setStatus('sending');

    try {
      if (
        !EMAIL_CONFIG.SERVICE_ID ||
        !EMAIL_CONFIG.TEMPLATE_ID ||
        !EMAIL_CONFIG.PUBLIC_KEY
      ) {
        throw new Error('Faltan variables de entorno de EmailJS');
      }

      const payload = {
        service_id: EMAIL_CONFIG.SERVICE_ID,
        template_id: EMAIL_CONFIG.TEMPLATE_ID,
        user_id: EMAIL_CONFIG.PUBLIC_KEY,
        template_params: {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
      };

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Request failed');
      }

      setStatus('ok');
      setFormData({ name: '', lastName: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  return (
    <section id="contact" className="section bg-[--color-fg] py-32 text-white">
      <div className="section-container">
        <div className="text-center w-full">
          <SectionTitle className="mb-10 text-5xl md:text-7xl">
            LET'S TALK
          </SectionTitle>

          <form
            noValidate
            className="ml-auto mt-20 flex w-full max-w-3xl flex-col gap-4 text-xl font-semibold md:text-2xl"
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
          >
            <div className="flex justify-between gap-4">
              <FormField
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  setErrors((prev) => ({ ...prev, name: false }));
                }}
                placeholder="Name"
                error={errors.name}
                errorMessage="Field Required"
              />
              <FormField
                name="lastName"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                  setErrors((prev) => ({ ...prev, lastName: false }));
                }}
                placeholder="Surname"
                error={errors.lastName}
                errorMessage="Field Required"
              />
            </div>
            <FormField
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                setErrors((prev) => ({ ...prev, email: false }));
              }}
              placeholder="Email"
              error={errors.email}
              errorMessage="Valid Email required"
            />
            <FormField
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, message: e.target.value }));
                setErrors((prev) => ({ ...prev, message: false }));
              }}
              placeholder="Let's talk about you have above your arms"
              error={errors.message}
              errorMessage="Field Required"
              textarea
              className="resize-none"
              rows={5}
            />

            <div className="flex justify-start text-lg md:text-2xl uppercase">
              {status !== 'sending' && (
                <Button size="lg" type="submit">
                  Send{' '}
                </Button>
              )}
              {status === 'sending' && <p>Sending...</p>}
              {status === 'ok' && <p>&nbsp;| Message sent successfully!</p>}
            </div>

            {status === 'error' && (
              <p>There was an error sending the message: {errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
