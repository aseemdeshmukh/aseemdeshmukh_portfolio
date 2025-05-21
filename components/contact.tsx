"use client"

import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactInfoItem } from "@/components/contact/contact-info-item"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? Feel free to reach out."
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfoItem icon={Mail} title="Email">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=desh.aseem@gmail.com"
                className="text-black/70 hover:text-[#ede8d0] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                desh.aseem@gmail.com
              </a>
            </ContactInfoItem>

            <ContactInfoItem icon={MapPin} title="Location">
              <p className="text-black/70">Dallas, Texas</p>
            </ContactInfoItem>

            <ContactInfoItem icon={Linkedin} title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/aseem-deshmukh/"
                className="text-black/70 hover:text-[#ede8d0] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aseem-deshmukh
              </a>
            </ContactInfoItem>

            <ContactInfoItem icon={Github} title="GitHub">
              <a
                href="https://github.com/aseemdeshmukh"
                className="text-black/70 hover:text-[#ede8d0] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/aseemdeshmukh
              </a>
            </ContactInfoItem>

            <div className="pt-4 text-center">
              <p className="text-black/70">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
