import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Dancing_Script } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { ContactModalProvider } from "@/context/ContactModalContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Build Labs — Premium Web Design",
  description:
    "Building fast, beautiful, high-converting websites for companies that want to stand out, not blend in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-screen">
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
