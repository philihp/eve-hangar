import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import Link from "next/link"
import "./globals.css";

export const metadata: Metadata = {
  title: "EVE Hangar",
  description: "EVE Online Public Hangar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>EVE Hangar</h1>
          [
            <Link href="/auth/login">Login</Link>
          ]
          [
            <Link href="/auth/register">Register</Link>
          ]
        </header>
        <hr />
        {children}
      </body>
      <GoogleAnalytics gaId="G-F0XT9PME9M" />
    </html>
  );
}
