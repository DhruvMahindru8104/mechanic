import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/mycomponents/Navbar";
import { ThemeProvider } from "@/components/themeprovider";
import FooterBlock from "@/components/ui/mycomponents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Car Mechanic Services - Amritsar",
  description: "We provide expert car repair and maintenance services. Book an appointment now!",
  keywords: ["car mechanic", "auto repair", "vehicle service", "oil change", "brake repair","best car mechanic in amritsar"],
  openGraph: {
    title: "Best Car Mechanic Services - Amritsar",
    description: "Expert car repair and maintenance services for all makes and models.",
    url: "https://mechanic-three.vercel.app", // Replace
    siteName: "Car Mechanic",
    images: [
      {
        url: "https://mechanic-three.vercel.app/heromechanic.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Car Mechanic Shop",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
     <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange
     >
        <Navbar/>
        {children}
        <FooterBlock/>
     </ThemeProvider>
        
      </body>
    </html>
  );
}
