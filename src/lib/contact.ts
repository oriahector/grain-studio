export interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

// EmailJS keys are public by design (client-side SDK); they're inlined at
// build time. Restrict the allowed origins in the EmailJS dashboard.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

/**
 * Sends the contact form through EmailJS's REST API (no SDK needed).
 * @throws if the keys are missing or the request fails
 */
export async function sendEmail(data: ContactFormData): Promise<void> {
  const { serviceId, templateId, publicKey } = EMAILJS;
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is missing');
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: data,
    }),
  });

  if (!response.ok) {
    throw new Error((await response.text()) || 'Failed to send email');
  }
}
