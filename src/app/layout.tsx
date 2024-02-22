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
          [
            <Link href="/auth/login">Login</Link>
          ]
          [
            <Link href="/auth/register">Register</Link>
          ]
        </header>

      {children}
      
      </body>
    </html>
  );
}
