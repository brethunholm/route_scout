import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "./components/layout/appShell/AppShell";
import "./app.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} app-root`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
