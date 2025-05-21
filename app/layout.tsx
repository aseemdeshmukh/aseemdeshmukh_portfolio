import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Lexend } from "next/font/google"

// Use Google Fonts
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "500", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aseem Deshmukh | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Aseem Deshmukh, Full Stack Developer" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${lexend.variable} font-lexend bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
