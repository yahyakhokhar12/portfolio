import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import SectionShell from '../components/SectionShell';
import SectionHeading from '../components/SectionHeading';
import { sanitizeText } from '../utils/helpers';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      name: sanitizeText(data.name),
      email: sanitizeText(data.email),
      message: sanitizeText(data.message)
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder',
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_placeholder'
      );
      alert('Message sent successfully.');
      reset();
    } catch {
      alert('Could not send message. Please use the email or WhatsApp links.');
    }
  };

  return (
    <SectionShell>
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Contact" title="Start a project or say hello." description="Validation, secure env-based form handling, and direct contact links are included." />
          <div className="mt-8 space-y-4 text-white/70">
            <p>Email: muhammadyahyakhokhar12@gmail.com</p>
            <p>Phone: +92-300-3804122</p>
            <p>LinkedIn and GitHub links can be wired to your final profile URLs.</p>
          </div>
          <div className="mt-8 h-80 overflow-hidden rounded-3xl border border-white/10">
            <iframe title="Google Map" src="https://www.google.com/maps?q=Pakistan&z=5&output=embed" className="h-full w-full" loading="lazy" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-3xl p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input {...register('name', { required: 'Name is required', minLength: 2 })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message || 'Enter a valid name'}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input {...register('email', { required: 'Email is required' })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea {...register('message', { required: 'Message is required', minLength: 10 })} rows={6} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message || 'Enter at least 10 characters'}</p>}
            </div>
            <button disabled={isSubmitting} className="rounded-full bg-gold-400 px-6 py-3 font-medium text-ink-950 transition hover:scale-[1.02] disabled:opacity-50">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}
