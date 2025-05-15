import type { Metadata } from "next";
import { Geist, Geist_Mono,IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const IBM_PLEX = IBM_Plex_Sans({
  weight:['100','200','300','400','500','600','700'],
  subsets: ["latin"],
  variable:'--font-ibm-flex'
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImageGen",
  description: "ImageGenerator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={cn("font-IBM_PLEX antialiased",IBM_PLEX.variable)}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
