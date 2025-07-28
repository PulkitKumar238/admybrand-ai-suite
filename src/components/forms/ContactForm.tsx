'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data); // or integrate with API
    alert('Message sent!');
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input {...register('name')} placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <textarea {...register('message')} placeholder="Your Message" rows={5} className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <Button type="submit" variant="primary" size="lg">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </section>
  );
}
