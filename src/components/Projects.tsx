import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Bot, Cloud, Shield, Activity } from 'lucide-react';

const projects = [
  {
    title: 'AI Currency Exchange Advisor',
    description: 'Streamlit web application that analyzes currency exchange rates and suggests optimal multi-currency conversions.',
    features: ['Real-time API integration', 'Conversion algorithms', 'Chatbot assistant'],
    tech: ['Python', 'Streamlit', 'API Keys'],
    github: 'https://github.com/GouthammLahar/AI-Currency-Exchange-Advisor.git',
    icon: Bot,
    color: 'neon-blue',
    image: '/archi.png'
  },
  {
    title: 'Static Website Hosting and Monitoring',
    description: 'Deployed a serverless static website using AWS services with full monitoring and security.',
    features: ['Amazon S3 hosting', 'CloudFront CDN', 'CloudWatch monitoring', 'HTTPS security'],
    tech: ['AWS'],
    link: 'https://drive.google.com/file/d/1TQJTzIDADKHbO1-g-mfhtdrIgbjd0z6M/view?usp=sharing',
    icon: Cloud,
    color: 'neon-purple',
    image: '/architecture.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-neon-blue">Projects</span></h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card group overflow-hidden"
            >
              {project.image && (
                <div className="overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} architecture`}
                    className="w-full h-72 object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-${project.color}/50 transition-colors`}>
                    <project.icon size={28} className={`text-${project.color}`} />
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-purple transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-3 mb-8">
                  {project.features.map(feature => (
                    <div key={feature} className="flex items-center text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
