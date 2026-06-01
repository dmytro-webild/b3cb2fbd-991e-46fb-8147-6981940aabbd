import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Detailing Brat: Unleash Your Car\'s Inner Shine',
  description: 'Experience premium car detailing services that deliver a showroom finish. Detailing Brat provides meticulous care, paint correction, ceramic coating, and interior rejuvenation.',
  keywords: ["car detailing, auto detailing, car wash, paint correction, ceramic coating, interior cleaning, vehicle shine, luxury car care"],
  openGraph: {
    "title": "Detailing Brat - Premium Car Detailing",
    "description": "Unleash your car's true potential with Detailing Brat's expert detailing services.",
    "url": "https://www.detailingbrat.com",
    "siteName": "Detailing Brat",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg",
        "alt": "Luxury car getting detailed"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Detailing Brat - Premium Car Detailing",
    "description": "Unleash your car's true potential with Detailing Brat's expert detailing services.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
