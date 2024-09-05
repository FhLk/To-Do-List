import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StatusBar from "../components/StatusBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Management",
  description: "Task Management",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
          <StatusBar/>
          {children}
      </body>
    </html>
  );
}
