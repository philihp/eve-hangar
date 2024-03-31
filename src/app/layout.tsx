import { Analytics } from "@vercel/analytics/react"
// import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import Header from './layout/header';

export const metadata: Metadata = {
  title: "EVE Hangar",
  description: "EVE Online Public Hangar",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <hr />
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
      {/* <GoogleAnalytics gaId="{ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID }" /> */}
    </html>
  );
}

export default RootLayout;