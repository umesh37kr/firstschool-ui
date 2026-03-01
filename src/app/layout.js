import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster } from "../components/ui/toaster";
import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "First School – Best School in Meral | CBSE Pattern Education",
  description:
    "First School Meral offers quality education with experienced teachers, modern classrooms, and holistic development for students.",
  keywords: [
    "Best school in Meral",
    "Umesh Kumar First School Meral",
    "Umesh Kumar Meral",
    "Meral Umesh Kumar",
    "Top school near Meral",
    "Top school in Meral",
    "CBSE school in Meral",
    "English medium school in Meral",
    "School admission in Meral",
    "Best school in Garhwa",
    "Top school near Garhwa",
    "CBSE school in Garhwa",
    "English medium school in Garhwa",
    "School admission in Garhwa",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="First School Meral" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/public/profile_pic_10.avif" />
        <meta property="og:url" content="https://www.firstschools.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/public/profile_pic_10.avif" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
