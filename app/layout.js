import "./globals.css";

export const metadata = {
  title: "Pawfect Companion",
  description:
    "Unleash a Lifetime of Joy by Building an Unbreakable Bond with Your Best Friend, Creating a Happier and More Enjoyable Life for Both of You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
