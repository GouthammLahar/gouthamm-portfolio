import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gouthammlahar7@gmail.com',
    href: 'mailto:gouthammlahar7@gmail.com',
    color: 'neon-blue'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9154989999',
    href: 'tel:+919154989999',
    color: 'neon-purple'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'gouthammlahar',
    href: 'https://linkedin.com/in/gouthammlahar',
    color: 'neon-cyan'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'GouthammLahar',
    href: 'https://github.com/GouthammLahar',
    color: 'white'
  }
];

export default function Contact() {

  const sendMail = () => {

    const emailjs = (window as any).emailjs;

    if (!emailjs) {
      alert("Email service not loaded.");
      return;
    }

    emailjs.init("bJe0H_fWGz-84Zcgo");

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    emailjs.send("service_portfolio", "template_rdgqeha", {
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then(() => {

      alert("Message sent successfully!");

      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("subject") as HTMLInputElement).value = "";
      (document.getElementById("message") as HTMLTextAreaElement).value = "";

    }).catch((error: any) => {

      console.error(error);
      alert("Failed to send message");

    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"/>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="space-y-8">

            <h3 className="text-2xl font-bold mb-6">
              Let's build something <span className="text-gradient">amazing</span> together.
            </h3>

            <p className="text-white/60 text-lg">
              I'm always open to discussing new projects or opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">

              {contactInfo.map((info) => (

                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col items-center text-center"
                >

                  <div className="mb-4">
                    <info.icon size={24}/>
                  </div>

                  <span className="text-xs text-white/40 uppercase">
                    {info.label}
                  </span>

                  <span className="text-sm text-white/80 break-all">
                    {info.value}
                  </span>

                </a>

              ))}

            </div>

          </div>

          {/* Contact Form */}

          <div className="glass-card p-8 md:p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-white/60">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/60">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                  />
                </div>

              </div>

              <div>

                <label className="text-sm text-white/60">Subject</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                />

              </div>

              <div>

                <label className="text-sm text-white/60">Message</label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                />

              </div>

              <motion.button
                type="button"
                onClick={sendMail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center justify-center space-x-2"
              >

                <span>Send Message</span>
                <Send size={18}/>

              </motion.button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
