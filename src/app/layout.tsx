import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import favicon from "./favicon.ico"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
  style: ["normal"],
})

export const metadata: Metadata = {
  title: "SnapScape",
  description: "Tours for photografers in Island",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
