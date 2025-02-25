import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'
import NextTopLoader from 'nextjs-toploader'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Auto Parts',
  description: 'Generated for Auto Parts'
}

export default async function LocaleLayout ({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
      </head>
      <body lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader
            color='#2F80ED'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing='ease'
            speed={200}
            shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          />
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
