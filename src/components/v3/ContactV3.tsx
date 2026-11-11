import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export const ContactV3: React.FC = () => {
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
      className="relative w-full min-h-screen snap-start flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/12 rounded-full blur-[190px] pointer-events-none" />

      <div className="w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 tracking-widest uppercase mb-3 pointer-events-auto"
          >
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>DIRECT TRANSMISSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight"
          >
            Let us build something extraordinary.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed"
          >
            Available for senior and staff engineering appointments, AI advisory, and creative technology collaborations.
          </motion.p>
        </div>

        {/* Frosted Glassmorphic Form Container with Spreading Neon Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          className="relative p-6 sm:p-10 rounded-3xl bg-black/30 backdrop-blur-lg border border-purple-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 pointer-events-auto"
        >
          {/* Subtle top neon border accent */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-400 mx-auto flex items-center justify-center text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold font-sans text-white">
                Transmission Received
              </h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-light">
                Thank you for reaching out. Your message has been routed to Khagesh and will receive prompt attention.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full font-mono text-xs font-bold text-purple-300 bg-black/40 border border-purple-500/40 hover:bg-black/60 transition-colors pointer-events-auto"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-widest">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-gray-500 transition-colors font-mono pointer-events-auto"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-widest">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-gray-500 transition-colors font-mono pointer-events-auto"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-purple-300 uppercase tracking-widest">
                  INQUIRY TOPIC
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white transition-colors font-mono pointer-events-auto"
                >
                  <option value="executive" className="bg-[#0e0719] text-white">Staff / Senior Engineering Role</option>
                  <option value="advisory" className="bg-[#0e0719] text-white">AI Architecture & Strategy Advisory</option>
                  <option value="creative" className="bg-[#0e0719] text-white">High-Performance WebGL & Spatial Engineering</option>
                  <option value="general" className="bg-[#0e0719] text-white">General Collaboration or Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-purple-300 uppercase tracking-widest">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-gray-500 transition-colors resize-none font-mono pointer-events-auto"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-purple-500/20">
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PCP PROTOCOL ENCRYPTED // AVG RESPONSE &lt; 24H</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-full font-mono text-xs font-bold text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 pointer-events-auto"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SEND TRANSMISSION</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Direct contact alternatives */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400 pointer-events-auto">
          <a
            href="mailto:contact@khagesh.dev"
            className="flex items-center space-x-1.5 hover:text-purple-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>contact@khagesh.dev</span>
          </a>
          <span className="text-purple-500/40">•</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-purple-300 transition-colors"
          >
            <span>GITHUB</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <span className="text-purple-500/40">•</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-purple-300 transition-colors"
          >
            <span>LINKEDIN</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
