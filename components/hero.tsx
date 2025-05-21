"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-[#ede8d0]/20 rounded-full text-sm text-black">
              Full Stack Developer
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight">
              Aseem <br /> Deshmukh<span className="text-[#ede8d0]">.</span>
            </h1>
            <p className="text-xl text-black/80 max-w-md">
 Full Stack Developer with a strong foundation in building scalable web and mobile applications, blending technical expertise with user-centered design
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#ede8d0] hover:bg-[#ede8d0]/90 text-black">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#ede8d0] text-black hover:bg-[#ede8d0]/10">
                <Link href="#projects">View projects</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="relative w-full pt-[100%] overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ede8d0]/30 to-transparent rounded-2xl" />
                <Image src="/aseem-photo.jpg" alt="Aseem Deshmukh" fill className="object-cover rounded-2xl" priority />
                <motion.div
                  className="absolute inset-0 border-4 border-white rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.55L21 7L12 16Z" fill="#ede8d0" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
