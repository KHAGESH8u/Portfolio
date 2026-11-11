import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, ArrowRight, Clock, MessageSquare } from 'lucide-react';

export const ContactSectionV5: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'executive',
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
    <section id="contact-v5" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#d4af37]/30 backdrop-blur-md text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4 pointer-events-auto">
          <span>CHAPTER VI</span>
          <span>//</span>
          <span>COMMUNICATION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
            Initiate Consultation
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
          Open to executive leadership roles, high-dimensional AI advisory, and select creative technology commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pointer-events-none">
        
        {/* Left Column: Studio Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="lg:col-span-5 space-y-6 pointer-events-auto"
        >
          <div className="rounded-3xl bg-black/40 backdrop-blur-md border border-[#d4af37]/25 p-8 sm:p-10 shadow-2xl">
            <h3 className="font-serif text-2xl font-normal text-white mb-8 pb-4 border-b border-[#d4af37]/15">
              Studio Despatch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-black/50 border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#d4af37]/80 uppercase tracking-widest">
                    PRIMARY DISPATCH
                  </div>
                  <a
                    href="mailto:alexander.vance@example.com"
                    className="text-sm font-serif text-slate-100 hover:text-[#e5c158] transition-colors mt-0.5 block"
                  >
                    alexander.vance@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-black/50 border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#d4af37]/80 uppercase tracking-widest">
                    STUDIO BASE
                  </div>
                  <div className="text-sm font-serif text-slate-200 mt-0.5">
                    San Francisco, California // Worldwide Engagements
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-black/50 border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#d4af37]/80 uppercase tracking-widest">
                    RESPONSE WINDOW
                  </div>
                  <div className="text-sm font-serif text-slate-200 mt-0.5">
                    Within 24 business hours
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-black/30 border border-[#d4af37]/20 font-serif text-xs text-[#eed98d]/90 leading-relaxed italic">
              &quot;Every project begins with a conversation about scale, proportion, and aesthetic integrity.&quot;
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-End Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="lg:col-span-7 pointer-events-auto"
        >
          <div className="rounded-3xl bg-black/40 backdrop-blur-md border border-[#d4af37]/25 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 border border-[#d4af37] mx-auto flex items-center justify-center text-[#e5c158] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-normal text-white">
                  Transmission Recorded
                </h4>
                <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed font-sans">
                  Thank you for initiating contact. Your inquiry has been prioritized and routed to Alexander Vance.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full font-serif text-xs tracking-widest text-[#eed98d] bg-black/40 border border-[#d4af37]/40 hover:bg-black/60 transition-colors uppercase"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-serif tracking-widest text-[#d4af37] uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lord / Lady / Colleague"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-[#d4af37]/25 focus:border-[#eed98d] focus:outline-none focus:ring-1 focus:ring-[#eed98d] text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-serif tracking-widest text-[#d4af37] uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-[#d4af37]/25 focus:border-[#eed98d] focus:outline-none focus:ring-1 focus:ring-[#eed98d] text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-serif tracking-widest text-[#d4af37] uppercase">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-[#d4af37]/25 focus:border-[#eed98d] focus:outline-none focus:ring-1 focus:ring-[#eed98d] text-sm text-white transition-colors"
                  >
                    <option value="executive" className="bg-black text-white">Principal / Staff Engineering Appointment</option>
                    <option value="advisory" className="bg-black text-white">AI Architecture & Strategy Advisory</option>
                    <option value="creative" className="bg-black text-white">High-End WebGL / Spatial Commission</option>
                    <option value="general" className="bg-black text-white">Confidential Technical Dialogue</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-serif tracking-widest text-[#d4af37] uppercase">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your architectural vision or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-[#d4af37]/25 focus:border-[#eed98d] focus:outline-none focus:ring-1 focus:ring-[#eed98d] text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-serif text-xs font-bold tracking-[0.2em] text-[#07020d] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d] hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] flex items-center justify-center space-x-2 disabled:opacity-50 uppercase"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING INQUIRY...</span>
                    </span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>DISPATCH CONSULTATION</span>
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

export default ContactSectionV5;
