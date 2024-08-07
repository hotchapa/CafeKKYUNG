import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/common/libs/registry'

export const metadata: Metadata = {
  title: '뀽스퀘어',
  description: '뀽스퀘어에 어서오세요.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
