import { EMAIL_CONFIG } from '@/config/constants';
import type { ContactFormData } from '@/types';

interface EmailJSPayload {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: ContactFormData;
}

/**
 * Sends an email using EmailJS service
 * @param data - The contact form data
 * @throws Error if configuration is missing or request fails
 */
export async function sendEmail(data: ContactFormData): Promise<void> {
  if (
    !EMAIL_CONFIG.SERVICE_ID ||
    !EMAIL_CONFIG.TEMPLATE_ID ||
    !EMAIL_CONFIG.PUBLIC_KEY
  ) {
    throw new Error('EmailJS configuration is missing');
  }

  const payload: EmailJSPayload = {
    service_id: EMAIL_CONFIG.SERVICE_ID,
    template_id: EMAIL_CONFIG.TEMPLATE_ID,
    user_id: EMAIL_CONFIG.PUBLIC_KEY,
    template_params: data,
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to send email');
  }
}
