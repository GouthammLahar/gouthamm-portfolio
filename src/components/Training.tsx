import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Training() {
  return (
    <section id="training" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Specialized <span className="text-neon-blue">Training</span></h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-neon-blue mb-1">Cipher Schools</h3>
              <p className="text-lg font-medium text-white/80">Data Structures and Algorithm</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="px-4 py-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-bold">
                Intensive Program
              </div>
              <a 
                href="https://www.cipherschools.com/certificate/preview?id=687b699306ffe76122762209" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-neon-blue hover:text-white transition-colors text-sm font-bold"
              >
                View Certificate <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>

          <p className="text-white/60 mb-8 leading-relaxed text-lg">
            Completed intensive training focused on mastering core computer science concepts and improving algorithmic problem solving and complexity optimization.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Arrays', 'Linked Lists', 'Stacks', 
              'Queues', 'Trees', 'Hash Tables'
            ].map(topic => (
              <div key={topic} className="flex items-center space-x-3 text-white/80">
                <CheckCircle2 size={18} className="text-neon-blue" />
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
