import "./globals.css";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pawfect Companion",
  description:
    "Unleash a Lifetime of Joy by Building an Unbreakable Bond with Your Best Friend, Creating a Happier and More Enjoyable Life for Both of You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
