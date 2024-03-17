import { GoogleAnalytics } from '@next/third-parties/google'
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
      <GoogleAnalytics gaId="G-F0XT9PME9M" />
    </html>
  );
}

export default RootLayout;