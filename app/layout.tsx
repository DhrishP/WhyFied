import type { Metadata } from 'next'
import { Inter,Rajdhani,Lexend_Mega } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] })
const rajdhani = Rajdhani({ subsets: ['latin'],weight: ["300","400","500","600","700"] })

export const metadata: Metadata = {
  title: 'WhyFied',
  description: 'A Progressive web app that makes you think',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rajdhani.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
