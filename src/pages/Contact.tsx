import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_xgvdwci',      // Replace with your actual Service ID
        'template_5pubcpd',     // Replace with your Template ID
        form.current,
        'ej4jPp9wGApi1Xy1H'       // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Hide success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Have a question, collaboration idea, or job opportunity? Feel free to get in touch!
      </p>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required placeholder='Name'/>
        </div>

        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required placeholder='Your Email'/>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required placeholder='Type your Message'/>
        </div>

        <motion.button
          className="submit-btn"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>

      {success && <p className="success-message">✅ Message sent successfully!</p>}
    </motion.section>
  );
};

export default Contact;
