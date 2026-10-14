export interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

export type FormErrors = Record<keyof ContactFormData, boolean>;

export type FormStatus = 'idle' | 'sending' | 'ok' | 'error';
