import "@/styles/global.css";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";

const font = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      {/* add js class to enable AOS hiding styles only when javascript enabled */}
      <Script id="js-class">{`document.body.classList.add("js");`}</Script>

      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XMT1C0GLB"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0XMT1C0GLB');
        `}
      </Script>

      <body className={`${font.className} bg-raisin-black`}>{children}</body>
    </html>
  );
}
