"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { EducationCard } from "@/components/education/education-card"

const education = [
  {
    degree: "Master of Science in Information Systems",
    institution: "Northeastern University",
    period: "September 2022 - May 2025",
    location: "Boston, MA",
    gpa: "3.61",
    description: "",
  },
  {
    degree: "Bachelor of Engineering in Electronics and Telecommunication",
    institution: "Pune University",
    period: "July 2013 - May 2017",
    location: "Pune, India",
    description: "",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#ede8d0]/5">
      <div className="container mx-auto px-4">
        <SectionHeader title="Education" description="My academic background and educational qualifications." />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
