"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export interface EducationProps {
  degree: string
  institution: string
  period: string
  location: string
  gpa?: string
  description?: string
  index: number
}

export function EducationCard({ degree, institution, period, location, gpa, description, index }: EducationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="border border-[#ede8d0]/20 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#ede8d0]" />
                {degree}
              </CardTitle>
              <CardDescription className="text-base font-medium text-black">{institution}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">{period}</div>
              <div className="text-sm text-black/70">{location}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {description && <p className="text-black/80">{description}</p>}
          {gpa && (
            <motion.div
              className="font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              GPA: <span className="text-black/80">{gpa}</span>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
