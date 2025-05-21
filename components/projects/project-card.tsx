"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export interface ProjectCardProps {
  title: string
  description: string[] | string
  tags: string[]
  period: string
  liveLink?: string
  githubLink?: string
  index: number
}

export function ProjectCard({ title, description, tags, period, liveLink, githubLink, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#ede8d0]/20 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <div className="text-sm font-medium text-black/70">{period}</div>
        </div>

        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 space-y-2">
            {description.map((item, i) => (
              <motion.li
                key={i}
                className="text-black/70"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-black/70">{description}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-2 py-1 bg-[#ede8d0]/10 text-black/80 text-xs rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(237, 232, 208, 0.3)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {liveLink && (
            <Button asChild variant="ghost" size="sm" className="text-black hover:text-[#ede8d0] hover:bg-[#ede8d0]/10">
              <Link href={liveLink}>
                <ExternalLink className="h-4 w-4 mr-1" />
                Live Demo
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button asChild variant="ghost" size="sm" className="text-black hover:text-[#ede8d0] hover:bg-[#ede8d0]/10">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
