import React, { useState } from 'react';
import { Send, CheckCircle, Terminal } from 'lucide-react';

export const BentoContactTile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'ai-architecture',
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
    <div
      id="contact"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/15">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white tracking-wider">
                TRANSMISSION PORT
              </h3>
              <span className="text-[10px] font-mono text-purple-400">
                DIRECT HIGH-PRIORITY INTAKE
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
            ENCRYPTED
          </span>
        </div>

        {/* Dispatch Metadata */}
        <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
          <div className="p-3 rounded-xl bg-black/60 border border-purple-500/20">
            <div className="text-[9px] text-slate-500 uppercase">DIRECT DISPATCH</div>
            <div className="text-purple-300 text-xs truncate mt-0.5">khagesh@ai.internal</div>
          </div>
          <div className="p-3 rounded-xl bg-black/60 border border-purple-500/20">
            <div className="text-[9px] text-slate-500 uppercase">RESPONSE SLA</div>
            <div className="text-white text-xs mt-0.5">&lt; 24 HOURS</div>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400 mx-auto flex items-center justify-center text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="font-mono text-lg font-bold text-white">
              PACKET RECEIVED BY KHAGESH
            </h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Your inquiry has been stored in memory. A response will be dispatched to your return address promptly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-5 py-2 rounded-xl font-mono text-xs font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/40 hover:bg-purple-900/40 transition-colors"
            >
              SEND ANOTHER TRANSMISSION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-purple-400 uppercase tracking-wider block">
                  IDENTIFIER / NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Khagesh Colleague"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-xs text-white placeholder-slate-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-purple-400 uppercase tracking-wider block">
                  RETURN ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="node@network.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-xs text-white placeholder-slate-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-purple-400 uppercase tracking-wider block">
                MISSION TYPE
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-xs text-white transition-colors"
              >
                <option value="ai-architecture">AI & Neural Acceleration Architecture</option>
                <option value="lead-role">Senior / Staff Engineering Leadership</option>
                <option value="advisory">Technical Advisory & Model Compression</option>
                <option value="general">Confidential Technical Query</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-purple-400 uppercase tracking-wider block">
                PAYLOAD *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Initialize discussion regarding..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-purple-500/25 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-xs text-white placeholder-slate-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.35)] flex items-center justify-center space-x-2 disabled:opacity-50 uppercase"
            >
              {isSubmitting ? (
                <span>DISPATCHING PACKET...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT PACKET TO KHAGESH</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-purple-400" />
          TLS 1.3 QUANTUM ENCRYPTION
        </span>
        <span className="text-purple-400">ACTIVE</span>
      </div>
    </div>
  );
};
