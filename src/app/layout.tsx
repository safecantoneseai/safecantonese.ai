import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import theme from '../ThemeRegistry/theme'
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'safecantonese.ai | 私隱受保障的 Whatsapp 廣東話語音轉文字工具',
  description: '私隱受保障的 Whatsapp 廣東話語音轉文字工具',
  applicationName: 'safecantonese.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TLGVN1G1GF" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
        <ThemeRegistry>
          {/* <CssBaseline /> */}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
