import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have a recruiter inquiry, software project, or want to discuss AI innovation — my inbox is open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl space-y-6 border border-white/10">
              <h3 className="text-2xl font-bold font-heading text-white">Contact Information</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email</span>
                      <a href={`mailto:${personalInfo.contact.email}`} className="text-xs font-mono text-white hover:text-cyan-300">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Phone</span>
                      <span className="text-xs font-mono text-white">
                        {personalInfo.contact.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-xs font-mono text-white">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-indigo-600/20 border border-white/10 text-slate-200 hover:text-indigo-400 text-xs font-medium transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-cyan-600/20 border border-white/10 text-slate-200 hover:text-cyan-400 text-xs font-medium transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold font-heading text-white">Send Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Sravya Dannana"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-400/50'
                    } text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400/50'
                    } text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Subject *</label>
                <input
                  type="text"
                  placeholder="Opportunity Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.subject ? 'border-red-500' : 'border-white/10 focus:border-cyan-400/50'
                  } text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors`}
                />
                {errors.subject && <p className="text-[11px] text-red-400">{errors.subject}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Hello Sravya, I came across your portfolio and would love to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400/50'
                  } text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? <span>Sending Message...</span> : <><Send size={16} /><span>Send Message</span></>}
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2"
                >
                  <Sparkles size={16} />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;