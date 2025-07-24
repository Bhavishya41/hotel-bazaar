
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/contact.css';

const Contact = () => {
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
    <div>
      <Header />

      <div className="contact-form-container">
        <h1 className="contact-title">Contact Us</h1>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={submitted && !formData.name ? 'error-input' : ''}
            />
            {submitted && !formData.name && (
              <small className="error-text">This field is required</small>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className={submitted && !formData.email ? 'error-input' : ''}
            />
            {submitted && !formData.email && (
              <small className="error-text">This field is required</small>
            )}
          </div>

          <div>
            <label>Phone Number</label>
            <PhoneInput
              country={'in'}
              value={formData.phone}
              onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
              }}
              inputClass={submitted && !formData.phone ? 'error-input' : ''}
              containerClass="phone-container"
            />
            {submitted && !formData.phone && (
              <small className="error-text">This field is required</small>
            )}
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className={submitted && !formData.message ? 'error-input' : ''}
            ></textarea>
            {submitted && !formData.message && (
              <small className="error-text">This field is required</small>
            )}
          </div>

          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
