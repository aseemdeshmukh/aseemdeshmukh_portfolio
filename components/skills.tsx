"use client"

import { Code, Database, Globe, Cloud } from "lucide-react"
import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SkillCategory } from "@/components/skills/skill-category"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5 text-[#ede8d0]" />,
    skills: ["Java", "Python"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 text-[#ede8d0]" />,
    skills: ["SQL Server", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frameworks",
    icon: <Code className="h-5 w-5 text-[#ede8d0]" />,
    skills: ["React Native", "Spring MVC", "Servlet", "JSP", "Spring Boot", "Hibernate", "Flask", "Django"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-5 w-5 text-[#ede8d0]" />,
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "AJAX",
      "JavaScript",
      "AngularJS",
      "Next.js",
      "ReactJs",
      "jQuery",
      "SASS",
      "Node.js",
    ],
  },
  {
    title: "Cloud Services/Tools",
    icon: <Cloud className="h-5 w-5 text-[#ede8d0]" />,
    skills: [
      "Expo",
      "Microsoft Azure",
      "Twilio",
      "NetBeans",
      "Visual Studio",
      "Eclipse",
      "SSMS",
      "Git",
      "Figma",
      "Moqups",
      "Balsamiq",
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-[#ede8d0]/5">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Technical Skills"
          description="My technical expertise and tools I use to build robust applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
              isActive={activeCategory === category.title}
              onHoverStart={() => setActiveCategory(category.title)}
              onHoverEnd={() => setActiveCategory(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
