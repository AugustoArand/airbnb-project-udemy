import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// OK
export const metadata: Metadata = {
  title: "Airbnb | Locações por temporada, chalés, casas de praia e mais!",
  description: "Reserve sua estadia perfeita com o Airbnb. Encontre acomodações únicas, desde apartamentos aconchegantes até chalés luxuosos, em todo o mundo.",
};


//OK
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
