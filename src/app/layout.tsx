import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Header from "./components/Header";
import Footer from "./components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sua cadeia de suprimentos para hamburgueria",
  description: "O 1# um hub de suprimento digital voltada para o nicho de hamburgueria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />    
        {children}
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
