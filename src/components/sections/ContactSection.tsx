import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'full-time',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <SectionHeader
        badge="LET'S CONNECT"
        title="Get in Touch"
        subtitle="Interested in discussing a staff engineering opportunity, architectural advisory, or a creative WebGL project? Drop me a line below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info & Availability */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center space-x-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    DIRECT EMAIL
                  </div>
                  <a
                    href="mailto:alexander.vance@example.com"
                    className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors mt-0.5 block"
                  >
                    alexander.vance@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    LOCATION
                  </div>
                  <div className="text-sm text-slate-200 mt-0.5">
                    San Francisco, California (Available for Remote)
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    RESPONSE TIME
                  </div>
                  <div className="text-sm text-slate-200 mt-0.5">
                    Typically responds within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 font-sans text-xs text-slate-400 leading-relaxed">
              Open to senior and staff engineering roles, generative AI advisory positions, and selective freelance creative technology consulting.
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minimalist Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 mx-auto flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(0,242,254,0.4)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will review it promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white transition-colors"
                  >
                    <option value="full-time">Senior / Staff Engineering Opportunity</option>
                    <option value="advisory">Technical Advisory & AI Architecture</option>
                    <option value="consulting">Creative WebGL / Frontend Consulting</option>
                    <option value="general">General Inquiry or Coffee Chat</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Alexander, I came across your portfolio and wanted to reach out regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group py-4 px-6 rounded-xl font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
