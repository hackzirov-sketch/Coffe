import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Noir Brew | Premium Artisan Coffee",
  description: "Experience artisan coffee in a space where taste, design, and atmosphere meet.",
  keywords: ["coffee", "artisan coffee", "cafe", "premium coffee", "Melbourne"],
  openGraph: {
    title: "Noir Brew | Premium Artisan Coffee",
    description: "Experience artisan coffee in a space where taste, design, and atmosphere meet.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full bg-bg-primary font-sans text-text-primary antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
