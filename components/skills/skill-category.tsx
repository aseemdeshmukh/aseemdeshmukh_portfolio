"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export interface SkillCategoryProps {
  title: string
  icon: ReactNode
  skills: string[]
  index: number
  isActive: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export function SkillCategory({ title, icon, skills, index, isActive, onHoverStart, onHoverEnd }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Card
        className={`border border-[#ede8d0]/20 shadow-sm hover:shadow-md transition-all duration-300 ${isActive ? "border-[#ede8d0] bg-[#ede8d0]/5" : ""}`}
        style={{
          transition: "all 0.3s ease",
          transformStyle: "preserve-3d",
        }}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1 }}
                animate={{
                  scale: isActive ? [1, 1.1, 1] : 1,
                  transition: {
                    duration: 0.3,
                    delay: i * 0.05,
                    type: "spring",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [-1, 1, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className={`bg-[#ede8d0]/10 text-black border-[#ede8d0]/30 py-1.5 transition-colors duration-300 ${
                    isActive ? "bg-[#ede8d0]/20 border-[#ede8d0]/50" : ""
                  }`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
