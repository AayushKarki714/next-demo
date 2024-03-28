import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // for making all of the page's dynamic
  cookies();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
