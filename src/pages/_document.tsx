import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <title>Tinjure Suppliers - Unveil Your Fashion Identity</title>
      </Head>
      <body className='relative'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
