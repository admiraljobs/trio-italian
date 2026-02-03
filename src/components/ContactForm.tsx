'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, Loader2, CheckCircle, Send } from 'lucide-react';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    'General Enquiry',
    'Booking Question',
    'Private Events',
    'Gift Cards',
    'Feedback',
    'Other',
  ];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4F27]/10 rounded-full mb-6">
          <CheckCircle size={32} className="text-[#3D4F27]" />
        </div>
        <h3 className="text-2xl text-[#2C2C2C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Message Sent!
        </h3>
        <p className="text-[#2C2C2C]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          Thank you for getting in touch. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl text-[#2C2C2C] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Send Us a Message
        </h3>
        <p className="text-[#2C2C2C]/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          We&apos;d love to hear from you
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <User size={16} className="inline mr-2" />
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <Mail size={16} className="inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            <MessageSquare size={16} className="inline mr-2" />
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select a subject...</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input-field resize-none"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
