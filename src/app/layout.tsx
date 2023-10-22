import Script from "next/script";
import { ChakraProviders } from "./chakra";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <noscript>
          <style>
            {`.page-wrapper {
                  visibility: visible !important;
            }`}
          </style>
        </noscript>
      </head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XMT1C0GLB"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0XMT1C0GLB');
        `}
      </Script>
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
