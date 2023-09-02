import './globals.css'
import useTranslation from 'next-translate/useTranslation'
import getT from 'next-translate/getT'
import type { Metadata, ResolvingMetadata, } from 'next'
import i18n from '../../../i18n'
import { redirect } from 'next/navigation'
import Script from 'next/script';
import ToastProvider from './toast.provider';
import QueryProvider from './query.provider';
import UserProvider from './user.provider'

export async function generateMetadata(
  { params }: any,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const t = await getT(params.lang || "en", 'common');
  return {
    title: `${t('page_title')}`,
    description: `${t('page_description')}`
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t, lang } = useTranslation('common')
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`)
  return (
    <html lang={lang} dir={lang == "ar" ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ToastProvider>
          <QueryProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </QueryProvider>
        </ToastProvider>
      </body>
    </html>
  )
}