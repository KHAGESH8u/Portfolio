import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Mail, MapPin, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'neural-architecture',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <SectionHeader
        badge="SECURE CHANNEL"
        title="TRANSMIT PACKET // CONTACT FORM"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Direct encrypted transmission channel for research collaborations and high-throughput engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct System Telemetry & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center space-x-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>TERMINAL TELEMETRY</span>
            </h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    DIRECT DISPATCH
                  </div>
                  <div className="text-sm font-mono text-slate-200 mt-0.5">
                    alexander.vance@neuralnexus.io
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    PHYSICAL COORDINATES
                  </div>
                  <div className="text-sm font-mono text-slate-200 mt-0.5">
                    San Francisco, CA // Global Remote
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    ENCRYPTION STANDARD
                  </div>
                  <div className="text-sm font-mono text-slate-200 mt-0.5">
                    RSA-4096 / TLS 1.3 QUANTUM-RESISTANT
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live System Status Box */}
            <div className="mt-8 p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  STATUS_CHECK
                </span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              <div className="text-slate-400 text-[11px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Average response cycle is within 24 operational hours.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minimalist Grid-Aligned Contact Form */}
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
                  PACKET TRANSMITTED SUCCESSFULLY
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your message has been routed to the primary intake node.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                >
                  TRANSMIT ANOTHER PACKET
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      IDENTIFIER / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lorem Ipsum"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      RETURN ADDRESS / EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="node@network.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject / Category */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    TRANSMISSION TOPIC
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white transition-colors"
                  >
                    <option value="neural-architecture">Neural Architecture & ML Systems</option>
                    <option value="distributed-computing">High-Throughput Distributed Nodes</option>
                    <option value="advisory-consulting">Advisory & Technical Strategy</option>
                    <option value="other-inquiry">General Technical Transmission</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    PAYLOAD / MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
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
                      <span>ENCRYPTING & DISPATCHING...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT PACKET</span>
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
