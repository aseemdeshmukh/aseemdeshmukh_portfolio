"use client"

import { motion } from "framer-motion"

interface LogoProps {
  size?: number
  showText?: boolean
}

export function Logo({ size = 40, showText = true }: LogoProps) {
  return (
    <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#ede8d0" />
        <rect x="8" y="10" width="24" height="15" rx="2" stroke="white" strokeWidth="2" fill="none" />
        <rect x="6" y="25" width="28" height="2" rx="1" fill="white" />
        <rect x="14" y="27" width="12" height="3" rx="1.5" fill="white" />
        <rect x="12" y="14" width="16" height="7" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
      {showText && (
        <span className="ml-2 font-bold text-2xl text-black">
          AD<span className="text-[#ede8d0]">.</span>
        </span>
      )}
    </motion.div>
  )
}
