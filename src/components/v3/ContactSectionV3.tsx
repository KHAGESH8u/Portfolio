import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, ArrowRight, Clock, MessageSquare } from 'lucide-react';

export const ContactSectionV3: React.FC = () => {
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
    <section
      id="contact-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-serif text-purple-200 tracking-widest uppercase mb-4 pointer-events-auto">
            <span>CHAPTER VI</span>
            <span>//</span>
            <span>CONSULTATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-purple-100 to-fuchsia-300 bg-clip-text text-transparent">
              Initiate Neural Dialogue
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-200 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Open to staff and principal engineering roles, high-dimensional AI advisory, and select creative technology commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pointer-events-none">
          {/* Left Column: Studio / Engineering Dispatch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-5 space-y-6 pointer-events-auto"
          >
            <div className="rounded-3xl bg-black/85 backdrop-blur-3xl border border-purple-500/25 p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-10 group-hover:opacity-30 blur-sm pointer-events-none transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="font-serif text-2xl font-normal text-white mb-8 pb-4 border-b border-purple-500/20">
                  Engineering Despatch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                        PRIMARY DISPATCH
                      </div>
                      <a
                        href="mailto:khagesh@example.com"
                        className="text-sm font-serif text-slate-100 hover:text-purple-300 transition-colors mt-0.5 block"
                      >
                        khagesh@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                        STATION BASE
                      </div>
                      <div className="text-sm font-serif text-slate-200 mt-0.5">
                        San Francisco, California // Worldwide Engagements
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                        RESPONSE WINDOW
                      </div>
                      <div className="text-sm font-serif text-slate-200 mt-0.5">
                        Within 24 business hours
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 rounded-2xl bg-purple-950/40 border border-purple-500/20 font-serif text-xs text-purple-200/90 leading-relaxed italic">
                  &quot;Every breakthrough begins with a conversation about scale, proportion, and computational integrity.&quot;
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Neon Violet Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-7 pointer-events-auto"
          >
            <div className="rounded-3xl bg-black/85 backdrop-blur-3xl border border-purple-500/25 p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-10 group-hover:opacity-30 blur-sm pointer-events-none transition-opacity duration-500" />
              
              <div className="relative">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-950/80 border border-purple-400 mx-auto flex items-center justify-center text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-normal text-white">
                      Transmission Recorded
                    </h4>
                    <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed font-sans">
                      Thank you for initiating contact. Your inquiry has been prioritized and routed to Khagesh.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full font-serif text-xs tracking-widest text-purple-200 bg-purple-950/60 border border-purple-500/40 hover:bg-purple-900/60 transition-colors uppercase"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-serif tracking-widest text-purple-400 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Partner / Engineering Lead"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-600 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-serif tracking-widest text-purple-400 uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="contact@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-serif tracking-widest text-purple-400 uppercase">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white transition-colors"
                      >
                        <option value="executive" className="bg-neutral-900 text-white">Staff / Principal Engineering Appointment</option>
                        <option value="advisory" className="bg-neutral-900 text-white">AI Architecture & Strategy Advisory</option>
                        <option value="creative" className="bg-neutral-900 text-white">High-Performance Neural / Spatial Commission</option>
                        <option value="general" className="bg-neutral-900 text-white">Confidential Technical Dialogue</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-serif tracking-widest text-purple-400 uppercase">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describe your architectural vision or engineering requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-600 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full font-serif text-xs font-bold tracking-[0.2em] text-black bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-300 hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)] flex items-center justify-center space-x-2 disabled:opacity-50 uppercase"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>DISPATCHING TRANSMISSION...</span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
