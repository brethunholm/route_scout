import { Inter, DM_Serif_Display, Geist_Mono } from "next/font/google";
import AppShell from "./components/layout/appShell/AppShell";
import "./app.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RouteScout — Smarter Road Trips",
  description:
    "RouteScout helps you plan road trips with smarter stops for gas, food, hotels, and attractions along your route.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
