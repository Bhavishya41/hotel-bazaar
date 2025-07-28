"use client";

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// If you have a contact.css, import it here or use Tailwind classes

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const accessKey = '2c6761e1-ab1c-4e0a-8a9b-e0f451e4834f';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!validate()) return;
    setStatus('Sending...');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        ...formData,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow" noValidate>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full border rounded px-3 py-2 ${submitted && !formData.name ? 'border-red-500' : ''}`}
          />
          {submitted && !formData.name && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full border rounded px-3 py-2 ${submitted && !formData.email ? 'border-red-500' : ''}`}
          />
          {submitted && !formData.email && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
            }}
            inputClass={submitted && !formData.phone ? 'border-red-500' : ''}
            containerClass="phone-container"
          />
          {submitted && !formData.phone && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className={`w-full border rounded px-3 py-2 ${submitted && !formData.message ? 'border-red-500' : ''}`}
          ></textarea>
          {submitted && !formData.message && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
        <button type="submit" className="w-full bg-darkblue text-white py-2 rounded font-semibold hover:bg-blue-900 transition">Send Message</button>
        <p className="text-center mt-2">{status}</p>
      </form>
    </div>
  );
} 