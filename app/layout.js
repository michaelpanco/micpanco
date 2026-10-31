import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://micpanco.com"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
  title: {
    default: "Michael Panco — Senior Frontend / Full-Stack Developer",
    template: "%s | Michael Panco",
  },
  description:
    "Portfolio of Michael Panco, a senior frontend and full-stack developer building thoughtful, user-centered digital products.",
  openGraph: {
    title: "Michael Panco — Senior Frontend / Full-Stack Developer",
    description: "Selected work, experience, and skills from Michael Panco.",
    url: "https://micpanco.com",
    siteName: "Michael Panco",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
