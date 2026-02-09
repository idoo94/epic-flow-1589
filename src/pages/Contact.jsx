import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/shared/GlassCard';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Whatsapp } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

const contactVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      const response = await fetch('/api/contact', { // Vercel Serverless Function endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        console.error('Contact form submission error:', errorData.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error during contact form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-24"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight text-shadow-md"
        >
          Get in <span className="text-amber-400">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-20"
        >
          Have a question, need a consultation, or just want to say hello? Reach out to us, and we'll be happy to assist you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <GlassCard className="p-8 h-full border-amber-400/20 flex flex-col justify-between gradient-border" style={{ '--speed': '15s' }}>
              <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">Contact Details</h2>
              <div className="space-y-6 text-lg text-zinc-300">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span>123 Style Ave, Metropolis, ST 90210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@amoscut.com" className="hover:text-amber-400 transition-colors">info@amoscut.com</a>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat: 10:00 AM - 5:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" className="border-green-500/50 bg-green-500/20 hover:bg-green-500/30">
                    <Whatsapp className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Button>
                </a>
                <a href="https://instagram.com/amoscut" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" className="border-pink-500/50 bg-pink-500/20 hover:bg-pink-500/30">
                    <Instagram className="mr-2 h-5 w-5" /> Instagram
                  </Button>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <GlassCard className="p-8 h-full border-zinc-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 text-shadow-sm">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Your Name</Label>
                  <Input id="name" type="text" value={formData.name} onChange={handleChange} required className="w-full" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Your Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                  <Input id="subject" type="text" value={formData.subject} onChange={handleChange} required className="w-full" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Your Message</Label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass-effect"
                  ></textarea>
                </div>
                <Button type="submit" disabled={isSubmitting} variant="glass" className="border-amber-400/50 bg-amber-400 text-white hover:bg-amber-500 w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center mt-4 flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" /> Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-10 text-shadow-sm">Find Us Here</h2>
          <GlassCard className="p-4 border-amber-400/20 w-full h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.226992523293!2d-122.41941568468164!3d37.774929279759715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858082a52b2f5d%3A0x6a9d7b2d2f7e7e7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AmosCut Location on Google Maps"
            ></iframe>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;