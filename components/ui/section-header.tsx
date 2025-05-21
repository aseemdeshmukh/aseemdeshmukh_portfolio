"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
      {description && <p className="text-black/70 max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
