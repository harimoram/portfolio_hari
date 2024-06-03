import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace the following with your actual EmailJS parameters
    const serviceId = 'service_dl90fxk';
    const templateId = 'template_tafoy1m';
    const publicKey = '6dUNYH6utrrXv6bil';  // Replace this with your actual EmailJS public key

    emailjs.sendForm(serviceId, templateId, event.target, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsFormSubmitted(true);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message, please try again.');
      });

    event.target.reset();
  };

  return (
    <div className="contact-container">
      <h1 className="page-heading">Contact Me</h1>
      <p className="sub-heading">Reach out and let's connect! Whether you have questions, inquiries, or just want to say hello, I'm here. 📩</p>

      <div className="contact-page">
        <div className="contact-image-section">
          <div className="image-and-text-container">
            <div className="image-container">
              <img src="contact-image.png" alt="Contact" />
            </div>
            <div className="contact-image-text">
              <p>Feel free to drop me a line using the form here. I look forward to hearing from you!</p>
            </div>
          </div>
        </div>
        <div className="contact-form-section">
          {!isFormSubmitted ? (
            <div className="contact-form">
              <h3>Get in Touch!</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" placeholder="Your message" required></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          ) : (
            <div className="confirmation-message">
              <h3>Thank you!</h3>
              <p>I'll get back to you as soon as possible.🌟</p>
            </div>
          )}
        </div>
      </div>
      <div className='copywrites'><p>© by Hari_Moram 2024 </p></div>
    </div>
  );
};

export default Contact;
