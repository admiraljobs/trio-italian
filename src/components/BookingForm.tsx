'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, Gift, Loader2, CheckCircle, ExternalLink } from 'lucide-react';
import { specialOccasions, timeSlots, guestNumbers, siteConfig } from '@/lib/data';
import type { BookingFormData } from '@/types';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    telephone: '',
    numberOfGuests: 2,
    preferredDate: '',
    preferredTime: '19:00',
    specialOccasion: 'None',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking request');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        telephone: '',
        numberOfGuests: 2,
        preferredDate: '',
        preferredTime: '19:00',
        specialOccasion: 'None',
        additionalNotes: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3D4F27]/10 rounded-full mb-6">
          <CheckCircle size={32} className="text-[#3D4F27]" />
        </div>
        <h3 className="text-2xl text-[#2C2C2C] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Booking Request Received!
        </h3>
        <p className="text-[#2C2C2C]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          Thank you for your reservation request. We will confirm your booking via email shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl text-[#2C2C2C] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Reserve Your Table
        </h3>
        <p className="text-[#2C2C2C]/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          Fill out the form below and we&apos;ll confirm your booking
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
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <Phone size={16} className="inline mr-2" />
              Telephone *
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="07123 456789"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <Users size={16} className="inline mr-2" />
              Number of Guests *
            </label>
            <select
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              required
              className="input-field"
            >
              {guestNumbers.map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
              <option value={11}>10+ (Large Party)</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <Calendar size={16} className="inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={today}
              required
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <Clock size={16} className="inline mr-2" />
              Preferred Time *
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="input-field"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            <Gift size={16} className="inline mr-2" />
            Special Occasion
          </label>
          <select
            name="specialOccasion"
            value={formData.specialOccasion}
            onChange={handleChange}
            className="input-field"
          >
            {specialOccasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-[#2C2C2C]/70 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={3}
            className="input-field resize-none"
            placeholder="Any special requests or dietary requirements..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              'Request Booking'
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-[#2C2C2C]/10">
        <p className="text-center text-[#2C2C2C]/60 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          Or book instantly via OpenTable
        </p>
        <a
          href={siteConfig.openTableUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full flex items-center justify-center gap-2"
        >
          <ExternalLink size={18} />
          Book on OpenTable
        </a>
      </div>
    </div>
  );
}
