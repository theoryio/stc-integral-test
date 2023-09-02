import useTranslation from 'next-translate/useTranslation'
import type { Metadata, ResolvingMetadata } from 'next'
import i18n from '../../i18n'
import { redirect, useRouter } from 'next/navigation'
import Script from 'next/script';

export const metadata: Metadata = {
  title: "stctv - Watch Movies, Series, and Live TV",
  description: "stctv - Watch Movies, Series, and Live TV",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}