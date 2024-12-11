import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@foundation/ui/src/index.css'
import { Container } from '@foundation/ui/src/components/atoms/container'
import { Navbar } from '@foundation/ui/src/components/organisms/Navbar'
import { SessionProvider } from '@foundation/ui/src/components/molecules/SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supply Chain Management Application',
  description: 'A platform which centralizes product, warehouse and inventory tracking on a single interface.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Container>
          <SessionProvider>
            <Navbar />
          </SessionProvider>
          {children}
        </Container>
      </body>
    </html>
  )
}
