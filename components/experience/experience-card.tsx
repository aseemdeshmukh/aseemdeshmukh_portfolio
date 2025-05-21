"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export interface ExperienceProps {
  title: string
  company: string
  period: string
  location: string
  description?: string
  achievements: string[]
  skills: string[]
  index: number
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  achievements,
  skills,
  index,
}: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="border border-[#ede8d0]/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#ede8d0]" />
                {title}
              </CardTitle>
              <CardDescription className="text-base font-medium text-black">{company}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">{period}</div>
              <div className="text-sm text-black/70">{location}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {description && <p className="text-black/80">{description}</p>}
          {achievements && (
            <ul className="list-disc pl-5 space-y-2">
              {achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="text-black/80"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              >
                <Badge variant="outline" className="bg-[#ede8d0]/10 text-black border-[#ede8d0]/30">
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
