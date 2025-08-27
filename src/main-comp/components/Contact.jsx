import React, { useRef, useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Debug: Log environment variables
      console.log('EmailJS Config:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    if (submitStatus === 'success') {
      return <div className="alert alert-success">Message sent successfully!</div>;
    }
    if (submitStatus === 'error') {
      return <div className="alert alert-danger">Failed to send message. Please try again.</div>;
    }
    return null;
  };

  return (
    <div className="bg-3" data-aos="fade-up">
      <div className="content">
        <h2 className="heading-main" id="contact">
          CONTACT
        </h2>
        <p className="text px-5 mx-5">
          Feel free to Contact me by submitting the form below and I will
          get back to you as soon as possible.
        </p>
      </div>

      {getStatusMessage()}

      <form 
        className="contact" 
        ref={form} 
        onSubmit={sendEmail} 
        data-aos="zoom-in"
        noValidate
      >
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Full Name" 
            required 
            aria-label="Your name"
            aria-describedby="name-error"
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="your.email@example.com" 
            required 
            aria-label="Your email address"
            aria-describedby="email-error"
          />
        </div>
        
        <div className="form-group">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number (Optional)" 
            maxLength="10" 
            pattern="[0-9]{10}"
            aria-label="Your phone number (optional)"
          />
        </div>
        
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Tell me about your project or how I can help you..." 
            maxLength={150} 
            required 
            rows="4"
            aria-label="Your message"
            aria-describedby="message-error"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message"}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              SENDING...
            </>
          ) : (
            "SEND MESSAGE"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
