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
      return <div className="p-[12px_20px] m-[20px_auto] rounded-[8px] max-w-[80%] text-center font-semibold bg-[#d4edda] text-[#155724] border border-[#c3e6cb]">Message sent successfully!</div>;
    }
    if (submitStatus === 'error') {
      return <div className="p-[12px_20px] m-[20px_auto] rounded-[8px] max-w-[80%] text-center font-semibold bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb]">Failed to send message. Please try again.</div>;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center py-20 bg-white dark:bg-black" data-aos="fade-up">
      <div className="text-center mb-10 w-full">
        <h2 className="text-[40px] font-bold leading-[60px] text-center mb-[30px] text-text-primary dark:text-white" id="contact">
          CONTACT
        </h2>
        <p className="text-[20px] font-medium leading-[35px] text-center mb-[30px] px-5 mx-5 text-text-secondary dark:text-gray-300 max-w-[800px] mx-auto">
          Feel free to Contact me by submitting the form below and I will
          get back to you as soon as possible.
        </p>
      </div>

      {getStatusMessage()}

      <form 
        className="w-[90%] max-w-[600px] flex flex-col bg-contact-bg dark:bg-contact-bg-dark p-[40px_30px] rounded-[20px] my-12 mx-auto shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[4px] before:bg-gradient-to-r before:from-[#112D4E] before:via-[#EDA911] before:to-[#112D4E]" 
        ref={form} 
        onSubmit={sendEmail} 
        data-aos="zoom-in"
        noValidate
      >
        <div className="mb-[25px] relative">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Full Name" 
            required 
            aria-label="Your name"
            aria-describedby="name-error"
            className="w-full p-[15px_20px] border-[2px] border-white/20 rounded-[12px] bg-white/95 text-text-primary text-[16px] font-medium transition-all duration-300 backdrop-blur-[10px] placeholder:text-text-secondary placeholder:font-normal focus:outline-none focus:border-text-primary focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.1)] focus:-translate-y-[2px] hover:border-[#112d4e80] hover:bg-white"
          />
        </div>
        
        <div className="mb-[25px] relative">
          <input 
            type="email" 
            name="email" 
            placeholder="your.email@example.com" 
            required 
            aria-label="Your email address"
            aria-describedby="email-error"
            className="w-full p-[15px_20px] border-[2px] border-white/20 rounded-[12px] bg-white/95 text-text-primary text-[16px] font-medium transition-all duration-300 backdrop-blur-[10px] placeholder:text-text-secondary placeholder:font-normal focus:outline-none focus:border-text-primary focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.1)] focus:-translate-y-[2px] hover:border-[#112d4e80] hover:bg-white"
          />
        </div>
        
        <div className="mb-[25px] relative">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number (Optional)" 
            maxLength="10" 
            pattern="[0-9]{10}"
            aria-label="Your phone number (optional)"
            className="w-full p-[15px_20px] border-[2px] border-white/20 rounded-[12px] bg-white/95 text-text-primary text-[16px] font-medium transition-all duration-300 backdrop-blur-[10px] placeholder:text-text-secondary placeholder:font-normal focus:outline-none focus:border-text-primary focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.1)] focus:-translate-y-[2px] hover:border-[#112d4e80] hover:bg-white"
          />
        </div>
        
        <div className="mb-[25px] relative">
          <textarea 
            name="message" 
            placeholder="Tell me about your project or how I can help you..." 
            maxLength={150} 
            required 
            rows="4"
            aria-label="Your message"
            aria-describedby="message-error"
            className="w-full p-[15px_20px] border-[2px] border-white/20 rounded-[12px] bg-white/95 text-text-primary text-[16px] font-medium transition-all duration-300 backdrop-blur-[10px] placeholder:text-text-secondary placeholder:font-normal focus:outline-none focus:border-text-primary focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.1)] focus:-translate-y-[2px] hover:border-[#112d4e80] hover:bg-white min-h-[120px] resize-y font-inherit leading-[1.6]"
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-gradient-to-br from-[#112D4E] to-[#1a4a6b] text-white border-none p-[15px_40px] rounded-[25px] text-[18px] font-semibold cursor-pointer transition-all duration-300 mt-[20px] mx-auto min-w-[150px] relative overflow-hidden shadow-none hover:not:disabled:-translate-y-[3px] hover:not:disabled:shadow-[0_10px_25px_rgba(17,45,78,0.4)] active:-translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full flex justify-center items-center"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message"}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-[16px] h-[16px] border-[2px] border-white/30 rounded-full border-t-white animate-spin mr-[8px]"></span>
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
