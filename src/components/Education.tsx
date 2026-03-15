import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { GraduationCap, MapPin, Rocket } from 'lucide-react';

const education = [
  {
    school: 'Tirumala EM High School',
    degree: 'Matriculation',
    period: '2020 – 2021',
    details: '100%',
    location: 'Andhra Pradesh',
    color: 'neon-cyan'
  },
  {
    school: 'Tirumala Junior College',
    degree: 'Intermediate',
    period: '2021 – 2023',
    details: '94.8%',
    location: 'Andhra Pradesh',
    color: 'neon-purple'
  },
  {
    school: 'Lovely Professional University',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – Present',
    details: 'CGPA: 7.2',
    location: 'Phagwara, Punjab',
    color: 'neon-blue'
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rocketY = useTransform(scrollSpring, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold mb-6">Academic <span className="text-gradient">Journey</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Tracing the path from foundational learning to cutting-edge development.</p>
        </motion.div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: rocketY }}
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(0,242,255,0.5)]"
          />
          
          {/* Animated Rocket */}
          <motion.div 
            style={{ top: rocketY }}
            className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="relative -translate-y-1/2">
              {/* Rocket Glow */}
              <div className="absolute inset-0 bg-neon-blue blur-xl opacity-50 scale-150" />
              <div className="relative w-12 h-12 rounded-full bg-dark-bg border-2 border-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.5)]">
                <Rocket size={24} className="text-neon-blue rotate-[135deg]" />
              </div>
              {/* Engine Flame Effect (Now pointing up since rocket points down) */}
              <motion.div 
                animate={{ 
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-neon-blue to-transparent origin-bottom"
              />
            </div>
          </motion.div>

          <div className="space-y-24">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 z-10 md:left-1/2 ${
                  edu.color === 'neon-blue' ? 'border-neon-blue' : 
                  edu.color === 'neon-purple' ? 'border-neon-purple' : 'border-neon-cyan'
                }`} />

                <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-[45%] pl-8 md:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card p-8 relative group"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`px-4 py-1 rounded-full text-xs font-bold border ${
                          edu.color === 'neon-blue' ? 'bg-neon-blue/10 border-neon-blue/20 text-neon-blue' : 
                          edu.color === 'neon-purple' ? 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple' : 
                          'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan'
                        }`}>
                          {edu.period}
                        </div>
                        <GraduationCap size={24} className={`group-hover:scale-110 transition-transform ${
                          edu.color === 'neon-blue' ? 'text-neon-blue' : 
                          edu.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'
                        }`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{edu.school}</h3>
                      <p className="text-white/80 font-medium mb-4 text-lg">{edu.degree}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-white/40">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className={`px-3 py-1 rounded bg-white/5 font-bold ${
                          edu.color === 'neon-blue' ? 'text-neon-blue' : 
                          edu.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'
                        }`}>
                          {edu.details}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
