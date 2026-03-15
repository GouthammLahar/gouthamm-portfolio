import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Academy Graduate — Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: 'Jan 2026',
    link: 'https://www.credly.com/badges/1241a895-381a-4b4a-9181-35427027305a/public_url',
    localCert: '/certificate.jpg',
    color: 'neon-blue'
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=6B661DD6B6D34CECDEFF8BE0585BB92A8BF7E6CA5E1A14804CF943480C794EF4',
    color: 'neon-purple'
  },
  {
    title: 'Social Networking — NPTEL Certification',
    issuer: 'NPTEL Online Certification',
    date: 'Apr 2025',
    link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25CS65S24750145704444411',
    color: 'neon-cyan'
  },
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    link: 'https://www.credly.com/badges/3d50324e-cb79-49cc-8ad2-6ed8764fe060/public_url',
    color: 'neon-blue'
  },
  {
    title: 'Legacy Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    link: 'https://www.freecodecamp.org/certification/fccbc8a5d2b-2f27-4e6a-8e23-ca105052ada7/responsive-web-design',
    color: 'neon-purple'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & <span className="text-neon-blue">Badges</span></h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-${cert.color}/50 transition-colors`}>
                  <Award size={24} className={`text-${cert.color}`} />
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-neon-blue/20 text-white/40 hover:text-neon-blue transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-white/60 text-sm mb-4">{cert.issuer}</p>

              <div className="flex items-center text-xs text-white/40">
                <Calendar size={14} className="mr-2" />
                {cert.date}
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center text-sm font-bold text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Verify Certificate <ExternalLink size={14} className="ml-2" />
              </motion.a>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
