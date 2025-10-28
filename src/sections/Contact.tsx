import { Button } from '@/components/ui/Button';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FormField } from '@/components/ui/FormField';
import { useContactForm } from '@/hooks/useContactForm';
import { IconArrowUpRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';
import { ANIMATION_DURATIONS, MOTION_DURATIONS } from '@/config/constants';

export function Contact() {
  const { formData, errors, status, errorMsg, handleSubmit, updateField } =
    useContactForm();

  return (
    <section id="contact" className="section mt-20 text-white">
      <div className="section-container">
        <div className="w-full text-center">
          <SectionTitle size="heading-2" sectionId="contact">
            LET'S TALK
          </SectionTitle>

          <form
            noValidate
            className="mx-auto mt-20 flex w-full max-w-3xl flex-col gap-4 text-xl md:text-2xl"
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
          >
            <div className="flex justify-between gap-4">
              <FormField
                name="name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Name"
                error={errors.name}
                errorMessage="Field Required"
              />
              <FormField
                name="lastName"
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                placeholder="Surname"
                error={errors.lastName}
                errorMessage="Field Required"
              />
            </div>
            <FormField
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="Email"
              error={errors.email}
              errorMessage="Valid Email required"
            />
            <FormField
              name="message"
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              placeholder="What's on your mind?"
              error={errors.message}
              errorMessage="Field Required"
              textarea
              className="-mb-2 resize-none"
              rows={5}
            />

            <div className="flex items-center justify-start gap-2 text-lg uppercase md:text-2xl">
              {status !== 'sending' && (
                <Button
                  size="lg"
                  type="submit"
                  className="group flex items-center gap-1 font-semibold"
                >
                  Send
                  <IconArrowUpRight
                    stroke={1.5}
                    className="size-7 transition-transform group-hover:rotate-45 md:size-10"
                    style={{
                      transitionDuration: `${ANIMATION_DURATIONS.NORMAL}ms`,
                    }}
                  />
                </Button>
              )}
              {status === 'sending' && (
                <p className="py-2 text-xl md:text-3xl">Sending...</p>
              )}
              {status === 'ok' && (
                <AnimatePresence>
                  <motion.p
                    className="py-2 text-xl md:text-3xl"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: MOTION_DURATIONS.FLOAT_X }}
                  >
                    &nbsp;| Message sent successfully!
                  </motion.p>
                </AnimatePresence>
              )}
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
