import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Globe, 
  Wrench, 
  Users, 
  Cpu, 
  Layout, 
  Cloud, 
  Terminal, 
  Figma, 
  Layers,
  Clock,
  UserCheck
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'Java', icon: Cpu },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ]
  },
  {
    title: 'Web',
    skills: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Layout },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
      { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' },
      { name: 'Ubuntu', icon: Terminal },
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Layers },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Adaptability', icon: Clock },
      { name: 'Team Collaboration', icon: Users },
      { name: 'Leadership', icon: UserCheck },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-neon-blue">Skills</span></h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-xl font-bold text-white/80 px-2">{category.title}</h3>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-card p-4 flex items-center space-x-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                      {skill.logo ? (
                        <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                      ) : (
                        <skill.icon size={20} className="text-neon-blue" />
                      )}
                    </div>
                    <span className="font-medium text-white/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
