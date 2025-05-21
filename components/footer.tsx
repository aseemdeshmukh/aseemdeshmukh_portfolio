"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 border-t border-[#ede8d0]/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-4 md:mb-0">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
            >
              <Logo size={30} />
            </Link>
          </motion.div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://github.com/aseemdeshmukh"
                className="text-black hover:text-[#ede8d0] transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.linkedin.com/in/aseem-deshmukh/"
                className="text-black hover:text-[#ede8d0] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=desh.aseem@gmail.com"
                className="text-black hover:text-[#ede8d0] transition-colors"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          <div className="text-sm text-black/70">
            &copy; {new Date().getFullYear()} Aseem Deshmukh. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-6 right-6 bg-[#ede8d0] text-white p-3 rounded-full shadow-lg z-50 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
