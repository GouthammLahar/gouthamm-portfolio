import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-neon-blue">Me</span></h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-6">
              <User className="text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            <p className="text-white/60 leading-relaxed">
              I’m a B.Tech Computer Science & Engineering student at Lovely Professional University with a strong interest in Cloud Computing and DevOps. I enjoy building systems that scale and solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-6">
              <Target className="text-neon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">My Approach</h3>
            <p className="text-white/60 leading-relaxed">
              My learning approach is hands-on. I build projects to understand how modern systems work — from application interfaces to the underlying cloud infrastructure and deployment processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-6">
              <Rocket className="text-neon-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-4">Current Focus</h3>
            <p className="text-white/60 leading-relaxed">
              Currently, I’m focused on strengthening my skills in cloud computing and DevOps while developing projects emphasizing automation, clean architecture, and scalable system design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
