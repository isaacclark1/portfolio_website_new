import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { clsx } from "clsx";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Clark - Software Engineer",
  description: "Isaac Clark Portfolio Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={clsx(
        jetBrainsMono.className,
        "h-full antialiased bg-black text-white",
      )}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
