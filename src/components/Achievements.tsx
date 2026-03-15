import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, GraduationCap, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        {/* Achievements Section */}
        <div id="achievements-content" className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Key <span className="text-neon-blue">Achievements</span></h2>
            <div className="w-20 h-1 bg-neon-blue rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
                <Trophy size={32} className="text-neon-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">3rd Place</h3>
                <p className="text-white/60">Discuss & Dazzle 2.0 Group Discussion Competition</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6">
              <h4 className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em] mb-4 flex items-center opacity-70">
                <GraduationCap size={12} className="mr-2" />
                Certificate
              </h4>
              <div className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1">
                <div className="relative overflow-hidden rounded-md">
                  <img 
                    src="/certificate.jpg" 
                    alt="Achievement Certificate" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/certificate/800/600";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href="/certificate.jpg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-neon-blue text-dark-bg text-xs font-bold rounded-md flex items-center hover:scale-105 transition-transform"
                    >
                      View Full <Star size={10} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Extracurricular Section */}
        <div id="extracurricular">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Extracurricular <span className="text-neon-purple">Activities</span></h2>
            <div className="w-20 h-1 bg-neon-purple rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                <Users size={24} className="text-neon-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Event Management Team Member</h3>
                <p className="text-neon-blue text-sm font-medium">Entrepreneurship Cell (E-Cell)</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Coordinated 16+ entrepreneurship events with 3000+ participants.',
                'Collaborated with multiple university clubs for joint events',
                'Supported planning and execution of entrepreneurship activities'
              ].map(item => (
                <li key={item} className="flex items-start text-white/60">
                  <Star size={14} className="text-neon-blue mt-1.5 mr-4 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/5 pt-6">
              <h4 className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em] mb-4 flex items-center opacity-70">
                <Users size={12} className="mr-2" />
                E-Cell Activities
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: '/ecell1.jpeg', alt: 'E-Cell Activity 1', objPos: 'center center' },
                  { src: '/ecell2.jpg',  alt: 'E-Cell Activity 2', objPos: 'center center' },
                  { src: '/ecell3.jpg',  alt: 'E-Cell Activity 3', objPos: 'center center' },
                  { src: '/ecell4.jpg',  alt: 'E-Cell Activity 4', objPos: 'center 35%' },
                ].map((img) => (
                  <div key={img.src} className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-40 object-cover group-hover:scale-[1.05] transition-transform duration-700"
                        style={{ objectPosition: img.objPos }}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = "https://picsum.photos/seed/ecell/800/600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <a
                          href={img.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-neon-blue text-dark-bg text-xs font-bold rounded-md flex items-center hover:scale-105 transition-transform"
                        >
                          View Full <Star size={10} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
