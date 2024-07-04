import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Panco - Frontend Developer",
  description:
    "I’m a web developer with 14 years of experience specializing in Frontend development, I am currently based in the Philippines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
