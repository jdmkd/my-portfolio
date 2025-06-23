import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import RouteProgress from "@/widgets/RouteProgress";
import PageWrapper from "@/widgets/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is a portfolio website built in Nextjs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <RouteProgress />
      <SocialLinks />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
      </body>
    </html>
  );
}
