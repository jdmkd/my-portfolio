import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import RouteProgress from "@/widgets/RouteProgress";
import PageWrapper from "@/widgets/PageWrapper";
import Script from "next/script";

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
      <Script
        id="microsoft-clarity-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, \"clarity\", \"script\", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
          `,
        }}
      />
      </body>
    </html>
  );
}
