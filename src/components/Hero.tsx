import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Server, Code, Shield, Terminal, Download } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className: string }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className}`}
  >
    <Icon size={40} className="text-neon-blue/40" />
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Tech Icons */}
      <FloatingIcon icon={Cloud} delay={0} className="top-1/4 left-1/4" />
      <FloatingIcon icon={Server} delay={1} className="top-1/3 right-1/4" />
      <FloatingIcon icon={Code} delay={2} className="bottom-1/4 left-1/3" />
      <FloatingIcon icon={Shield} delay={0.5} className="bottom-1/3 right-1/3" />
      <FloatingIcon icon={Terminal} delay={1.5} className="top-1/2 right-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for Opportunities
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Padala <span className="text-gradient">Gouthamm Lahar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-8">
            Developer | <span className="text-neon-blue">Cloud Enthusiast</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            Computer Science undergraduate focused on Cloud Computing and DevOps, building real-world projects around automation, scalable infrastructure, and modern deployment practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-neon-blue text-dark-bg font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-neon-blue/50 hover:bg-white/5 transition-all font-bold"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(179,0,255,0.3)] transition-all font-bold flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center group"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-neon-blue/30 rounded-full group-hover:border-neon-blue/60 transition-colors duration-500"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-neon-purple/20 rounded-full group-hover:border-neon-purple/40 transition-colors duration-500"
            />
            
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-neon-blue/50 shadow-[0_0_30px_rgba(0,242,255,0.3)] bg-dark-bg group-hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] group-hover:border-neon-blue transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Padala Gouthamm Lahar"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/gouthamm/400/400";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
