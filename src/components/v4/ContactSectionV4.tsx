import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, ArrowRight, Clock, Send } from 'lucide-react';

export const ContactSectionV4: React.FC = () => {
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
      id="contact-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#042626] border border-white/30 text-xs font-serif text-white tracking-widest uppercase mb-3 pointer-events-auto">
            <span>CHAPTER VI</span>
            <span>//</span>
            <span>COMMUNICATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
              Initiate Consultation
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-teal-50 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Open to executive leadership roles, high-dimensional AI advisory, and select creative technology commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pointer-events-none">
          
          {/* Left Column: Studio Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-5 space-y-5 pointer-events-none"
          >
            <div className="rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-8 shadow-2xl pointer-events-auto">
              <h3 className="font-serif text-2xl font-normal text-white mb-6 pb-4 border-b border-white/15">
                Studio Despatch
              </h3>

              <div className="space-y-5 text-sm font-sans font-light">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#042626] border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-teal-300 uppercase tracking-widest">
                      ELECTRONIC COMMUNIQUE
                    </div>
                    <a
                      href="mailto:contact@khagesh.dev"
                      className="text-white hover:text-teal-200 transition-colors font-serif text-base"
                    >
                      contact@khagesh.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#042626] border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-teal-300 uppercase tracking-widest">
                      PHYSICAL LOCATION
                    </div>
                    <div className="text-white font-serif text-base">
                      San Francisco, California
                    </div>
                    <div className="text-xs text-teal-200/80 mt-0.5">
                      Available for worldwide deployment & executive advisory
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#042626] border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-teal-300 uppercase tracking-widest">
                      RESPONSE LATENCY
                    </div>
                    <div className="text-white font-serif text-base">
                      &lt; 24 Hours Guaranteed
                    </div>
                    <div className="text-xs text-teal-200/80 mt-0.5">
                      PCP protocol encrypted routing
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-serif text-white">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 hover:text-teal-200 transition-colors"
                >
                  <span>GITHUB ARCHIVE</span>
                  <ArrowRight className="w-3 h-3 text-teal-300" />
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 hover:text-teal-200 transition-colors"
                >
                  <span>LINKEDIN DOSSIER</span>
                  <ArrowRight className="w-3 h-3 text-teal-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Luxury Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-7 pointer-events-none"
          >
            <div className="relative rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-10 shadow-2xl pointer-events-auto">
              {/* Porcelain specular edge */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-300 mx-auto flex items-center justify-center text-teal-200 shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-3xl font-normal text-white">
                    Transmission Acknowledged
                  </h4>
                  <p className="text-sm text-teal-100 font-sans font-light max-w-md mx-auto leading-relaxed">
                    Thank you for your dispatch. Your consultation request has been delivered directly to Khagesh and will receive prompt attention.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-3 rounded-full font-serif text-xs tracking-widest text-[#011414] bg-gradient-to-r from-teal-200 to-white font-bold uppercase transition-all duration-300 hover:brightness-110"
                  >
                    DISPATCH ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-widest text-teal-200">
                        YOUR NAME / INSTITUTION *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lady Jane Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#011414]/80 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-sm text-white placeholder-teal-600 font-serif transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-widest text-teal-200">
                        ELECTRONIC EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@sterling-corp.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#011414]/80 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-sm text-white placeholder-teal-600 font-serif transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-serif uppercase tracking-widest text-teal-200">
                      CONSULTATION OBJECTIVE
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#011414]/80 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-sm text-white font-serif transition-colors"
                    >
                      <option value="executive" className="bg-[#021b1b] text-white">Staff / Senior Engineering Appointment</option>
                      <option value="advisory" className="bg-[#021b1b] text-white">High-Dimensional AI Architecture & Strategy Advisory</option>
                      <option value="creative" className="bg-[#021b1b] text-white">Spatial Computing & High-Performance WebGL Commission</option>
                      <option value="general" className="bg-[#021b1b] text-white">General Inquiry or Colloquium Invitation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-serif uppercase tracking-widest text-teal-200">
                      DISPATCH NARRATIVE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Articulate the parameters of your project, engagement, or organizational timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#011414]/80 border border-white/20 focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-sm text-white placeholder-teal-600 font-serif transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-xs font-serif text-teal-200">
                      <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                      <span>DIRECT TRANSMISSION PROTOCOL ACTIVE</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full font-serif text-xs font-bold tracking-widest text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 hover:brightness-110 shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:shadow-[0_0_35px_rgba(45,212,191,0.6)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>DISPATCH TRANSMISSION</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
