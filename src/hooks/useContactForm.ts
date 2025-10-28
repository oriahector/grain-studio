import { useState } from 'react';
import type { ContactFormData, FormErrors, FormStatus } from '@/types';
import { isValidEmail } from '@/utils';
import { sendEmail } from '@/services/emailService';

const initialFormData: ContactFormData = {
  name: '',
  lastName: '',
  email: '',
  message: '',
};

const initialErrors: FormErrors = {
  name: false,
  lastName: false,
  email: false,
  message: false,
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: formData.name.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: !isValidEmail(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setErrorMsg('');
    setStatus('sending');

    try {
      await sendEmail(formData);
      setStatus('ok');
      setFormData({ ...initialFormData });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setErrors({ ...initialErrors });
    setStatus('idle');
    setErrorMsg('');
  };

  return {
    formData,
    errors,
    status,
    errorMsg,
    handleSubmit,
    updateField,
    resetForm,
  };
}
