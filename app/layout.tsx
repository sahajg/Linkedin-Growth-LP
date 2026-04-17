import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davro: LinkedIn + Twitter Distribution Funnel for B2B Founders",
  description: "We help B2B founders build a done-for-you distribution funnel that generates 8-15 qualified inbound client meetings every month without relying on referrals or paid ads.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#050a17", color: "#F8FAFC" }}>
        {children}
      </body>
    </html>
  );
}
