

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-green-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-green-500 tracking-[0.5em] uppercase mb-4">// Connection</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
            Let’s Build the <span className="text-gray-500">Future.</span>
          </h3>
        </motion.div>

        {/* TERMINAL STYLE CONTACT CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900/40 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-xs font-mono text-gray-500 italic">contact_usama.sh</span>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 text-left">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div 
                className="group cursor-pointer" 
                onClick={() => copyToClipboard("usamazeeshan5@gmail.com")}
              >
                <p className="text-xs font-mono text-green-500 mb-1 uppercase tracking-widest">Email Address</p>
                <p className="text-xl md:text-2xl font-bold group-hover:text-green-400 transition-colors">
                  usamazeeshan5@gmail.com
                </p>
                {copied && <span className="text-[10px] text-green-500 animate-pulse">Copied!</span>}
              </div>

              <div>
                <p className="text-xs font-mono text-green-500 mb-1 uppercase tracking-widest">Direct Line</p>
                <p className="text-xl md:text-2xl font-bold hover:text-green-400 transition-colors">
                  +92 301 4559042
                </p>
              </div>

              <div>
                <p className="text-xs font-mono text-green-500 mb-1 uppercase tracking-widest">HQ Location</p>
                <p className="text-xl md:text-2xl font-bold">
                  Lahore, <span className="text-gray-500">Pakistan</span>
                </p>
              </div>
            </div>

            {/* Right: Quick CTA */}
            <div className="flex flex-col justify-center items-center md:items-start border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <p className="text-gray-400 mb-6 text-center md:text-left">
                Ready to scale your next venture? Whether it's AI, SaaS, or complex enterprise systems, I'm ready to lead the architecture.
              </p>
              <motion.a 
                href="mailto:usamazeeshan5@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center py-4 bg-green-500 text-black font-bold rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-green-400 transition-all"
              >
                START A CONVERSATION
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Branding */}
        <div className="mt-20 opacity-30 flex flex-col items-center">
          <div className="text-2xl font-black italic tracking-tighter">INARTIA</div>
          <p className="text-[10px] font-mono mt-2">© 2026 USAMA ZEESHAN // ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  );
}