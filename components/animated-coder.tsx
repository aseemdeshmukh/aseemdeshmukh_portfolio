"use client"

import { useEffect, useRef } from "react"

export default function AnimatedCoder() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Animation logic
    const fingers = svgRef.current?.querySelectorAll(".typing-fingers")
    const screen = svgRef.current?.querySelector(".screen-content")
    const cursor = svgRef.current?.querySelector(".cursor")

    // Animate typing fingers
    if (fingers && fingers.length > 0) {
      const animateFingers = () => {
        fingers.forEach((finger, index) => {
          const delay = index * 100
          setTimeout(() => {
            finger.classList.add("active")
            setTimeout(() => {
              finger.classList.remove("active")
            }, 200)
          }, delay)
        })
      }

      const typingInterval = setInterval(animateFingers, 1000)
      return () => clearInterval(typingInterval)
    }

    // Animate cursor blinking
    if (cursor) {
      const blinkInterval = setInterval(() => {
        cursor.classList.toggle("hidden")
      }, 500)
      return () => clearInterval(blinkInterval)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-[400px]"
    >
      <style>
        {`
          .typing-fingers {
            transition: transform 0.1s ease-in-out;
          }
          .typing-fingers.active {
            transform: translateY(2px);
          }
          .screen-content {
            animation: typing 4s steps(20) infinite;
          }
          .cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 80px }
          }
          @keyframes blink {
            50% { opacity: 0 }
          }
          .hair {
            animation: hair-move 3s ease-in-out infinite;
          }
          @keyframes hair-move {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(2deg); }
            100% { transform: rotate(0deg); }
          }
          .head {
            animation: head-move 4s ease-in-out infinite;
          }
          @keyframes head-move {
            0% { transform: translate(0, 0); }
            50% { transform: translate(0, 2px); }
            100% { transform: translate(0, 0); }
          }
          .plant-leaf {
            animation: plant-move 5s ease-in-out infinite;
          }
          @keyframes plant-move {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>

      {/* Desk */}
      <rect x="50" y="250" width="300" height="20" rx="2" fill="#e0e0e0" stroke="#000000" strokeWidth="2" />
      <rect x="70" y="270" width="20" height="80" fill="#d0d0d0" stroke="#000000" strokeWidth="2" />
      <rect x="310" y="270" width="20" height="80" fill="#d0d0d0" stroke="#000000" strokeWidth="2" />

      {/* Laptop */}
      <g transform="translate(150, 180)">
        {/* Laptop base */}
        <rect x="0" y="40" width="100" height="10" rx="2" fill="#333333" stroke="#000000" strokeWidth="2" />
        {/* Laptop screen */}
        <rect x="10" y="-40" width="80" height="80" rx="2" fill="#333333" stroke="#000000" strokeWidth="2" />
        <rect x="15" y="-35" width="70" height="70" rx="1" fill="#1a1a1a" stroke="#000000" strokeWidth="1" />

        {/* Screen content - code */}
        <g className="screen-content">
          <rect x="20" y="-30" width="60" height="2" fill="#C8A2C8" />
          <rect x="20" y="-25" width="40" height="2" fill="#C8A2C8" />
          <rect x="25" y="-20" width="50" height="2" fill="#ffffff" />
          <rect x="25" y="-15" width="30" height="2" fill="#ffffff" />
          <rect x="20" y="-10" width="55" height="2" fill="#C8A2C8" />
          <rect x="20" y="-5" width="45" height="2" fill="#C8A2C8" />
          <rect x="25" y="0" width="40" height="2" fill="#ffffff" />
          <rect x="25" y="5" width="50" height="2" fill="#ffffff" />
          <rect x="20" y="10" width="35" height="2" fill="#C8A2C8" />
          <rect x="20" y="15" width="55" height="2" fill="#C8A2C8" />
          <rect x="20" y="20" width="30" height="2" fill="#C8A2C8" />
          <rect x="20" y="25" width="40" height="2" fill="#ffffff" />
        </g>

        {/* Cursor */}
        <rect className="cursor" x="60" y="25" width="2" height="4" fill="#ffffff" />
      </g>

      {/* Girl */}
      <g transform="translate(120, 150)">
        {/* Hair */}
        <g className="hair">
          <path d="M40,70 C0,40 0,0 40,-10 C80,0 80,40 40,70" fill="#663300" stroke="#000000" strokeWidth="2" />
        </g>

        {/* Head */}
        <g className="head">
          <circle cx="40" cy="30" r="30" fill="#ffe0bd" stroke="#000000" strokeWidth="2" />
          {/* Face */}
          <circle cx="30" cy="20" r="3" fill="#000000" /> {/* Left eye */}
          <circle cx="50" cy="20" r="3" fill="#000000" /> {/* Right eye */}
          <path d="M30,15 Q40,10 50,15" stroke="#000000" strokeWidth="1.5" fill="none" /> {/* Eyebrows */}
          <path d="M35,40 Q40,45 45,40" stroke="#000000" strokeWidth="1.5" fill="none" /> {/* Smile */}
          {/* Glasses */}
          <rect x="25" y="18" width="10" height="8" rx="4" fill="none" stroke="#000000" strokeWidth="1.5" />
          <rect x="45" y="18" width="10" height="8" rx="4" fill="none" stroke="#000000" strokeWidth="1.5" />
          <line x1="35" y1="22" x2="45" y2="22" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* Body */}
        <path d="M20,70 L40,120 L60,70 Z" fill="#C8A2C8" stroke="#000000" strokeWidth="2" />

        {/* Arms */}
        <path d="M20,80 Q10,100 30,130" stroke="#000000" strokeWidth="2" fill="none" />
        <path d="M60,80 Q70,100 90,130" stroke="#000000" strokeWidth="2" fill="none" />

        {/* Hands/Fingers typing */}
        <g transform="translate(150, 180)">
          <circle className="typing-fingers" cx="-120" cy="-50" r="4" fill="#ffe0bd" stroke="#000000" strokeWidth="1" />
          <circle className="typing-fingers" cx="-110" cy="-50" r="4" fill="#ffe0bd" stroke="#000000" strokeWidth="1" />
          <circle className="typing-fingers" cx="-60" cy="-50" r="4" fill="#ffe0bd" stroke="#000000" strokeWidth="1" />
          <circle className="typing-fingers" cx="-50" cy="-50" r="4" fill="#ffe0bd" stroke="#000000" strokeWidth="1" />
        </g>
      </g>

      {/* Plant */}
      <g transform="translate(50, 150)">
        <rect x="0" y="80" width="20" height="20" rx="2" fill="#C8A2C8" stroke="#000000" strokeWidth="1" />
        <path className="plant-leaf" d="M10,80 C0,60 10,40 20,60" stroke="#006400" strokeWidth="2" fill="#008800" />
        <path className="plant-leaf" d="M10,80 C20,60 30,40 20,60" stroke="#006400" strokeWidth="2" fill="#008800" />
        <path className="plant-leaf" d="M10,80 C0,70 -10,50 5,65" stroke="#006400" strokeWidth="2" fill="#008800" />
        <line x1="10" y1="80" x2="10" y2="50" stroke="#006400" strokeWidth="2" />
      </g>

      {/* Coffee mug */}
      <g transform="translate(300, 220)">
        <path d="M0,0 L0,30 Q10,30 10,0 Z" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
        <path d="M10,5 Q20,10 10,15" fill="none" stroke="#000000" strokeWidth="1.5" />
        <ellipse cx="5" cy="0" rx="5" ry="2" fill="#C8A2C8" stroke="#000000" strokeWidth="1" />
      </g>
    </svg>
  )
}
