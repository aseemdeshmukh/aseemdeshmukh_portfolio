"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ExperienceCard } from "@/components/experience/experience-card"

const experiences = [
  {
    title: "Full Stack App Developer Intern",
    company: "NUUBI INC.",
    period: "Jun 2024 - Dec 2024",
    location: "USA",
    description: "",
    achievements: [
      "Implemented React Native for mobile development (Android, iOS) and website which enhanced code efficiency by 40% management and improved page rendering",
      "Enhanced application security by integrating SecureStore and LocalStorage, reducing authentication-related vulnerabilities by 60%",
      "Boosted app performance by 15% through strategic code optimization and efficient React Hooks implementation",
      "Designed new features, debugged complex issues and worked on PostgreSQL database projects",
    ],
    skills: ["React Native", "PostgreSQL", "React Hooks", "SecureStore", "LocalStorage"],
  },
  {
    title: "SAP Analyst",
    company: "BIRLASOFT LTD.",
    period: "Sept 2020 - Jul 2022",
    location: "India",
    description: "",
    achievements: [
      "Engineered 'Universe – SAP Business Objects' on Relational and OLAP data sources in Information Design Tool, extracting data to build comprehensive 'Web Intelligence' reports efficiently by 60%",
      "Independently strategized, advised European clients (Eg: BMW, Accenture, Deloitte, JP Morgan, Apple) on SAP BO development and proposed reliable solutions that catered to their needs and challenges effectively by 70%",
    ],
    skills: ["SAP Business Objects", "OLAP", "Information Design Tool", "Web Intelligence", "Client Consulting"],
  },
  {
    title: "IT Operations Lead",
    company: "MESHBASE TECH. PVT. LTD.",
    period: "May 2018 - Mar 2020",
    location: "India",
    description: "",
    achievements: [
      "Developed and maintained scalable front-end websites in an agile environment, improving page load speeds by 45% using optimized HTML, CSS, Microsoft Azure and CosmosDB",
      "Designed IVR and customer surveys through Twilio, integrated it into client websites and improved the user engagement by 35%",
    ],
    skills: ["HTML", "CSS", "Microsoft Azure", "CosmosDB", "Twilio", "IVR", "Project Management"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Work Experience"
          description="My professional journey and the companies I've had the pleasure to work with."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <ExperienceCard key={index} {...job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
