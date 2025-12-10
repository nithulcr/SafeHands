import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


import { Toaster } from 'react-hot-toast';
import SmoothScrollWrapper from "./SmoothScrollWrapper";

export const metadata: Metadata = {
  title: 'Safe Hands',
  description: 'Safe Hands',
  keywords: '',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {/* Load gtag.js once */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4L0PCEK1YL"
          strategy="afterInteractive"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17754373575"
          strategy="afterInteractive"
        />



        {/* Unified Google Analytics + Ads gtag config */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4L0PCEK1YL');   // Google Analytics
            gtag('config', 'AW-17754373575'); // Google Ads
          `}
        </Script>
      </head>
      <body className="antialiased mx-2 md:mx-5">

        {/* Meta Pixel Code for Facebook */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1567294114632706');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1567294114632706&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <SmoothScrollWrapper>
          {children}
          <Toaster />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
