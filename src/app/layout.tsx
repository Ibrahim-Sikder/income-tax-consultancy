

import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import Providers from "@/lib/Theme/Providers";
import { Header } from "@/components/Share/Header/Header";
import { Footer } from "@/components/Share/Footer/Footer";


const hindiSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Income Tax Consulting | Home",
  description: "Income tax consultancy ",
  icons: {
    icon: "/favicon.ico.svg",
    shortcut: "/favicon.ico.svg",
    apple: "/favicon.ico.svg",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <Providers>
        <body className={hindiSiliguri.className}>
          <Header />
          <Toaster position="top-center" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
