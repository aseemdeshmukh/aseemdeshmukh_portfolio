"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ContactInfoItemProps {
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function ContactInfoItem({ icon: Icon, title, children }: ContactInfoItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="bg-[#ede8d0]/20 p-3 rounded-full">
        <Icon className="h-5 w-5 text-[#ede8d0]" />
      </div>
      <div>
        <h3 className="font-medium text-black mb-1">{title}</h3>
        {children}
      </div>
    </motion.div>
  )
}
