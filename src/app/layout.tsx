import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RouteProgress from "@/widgets/RouteProgress";
import PageWrapper from "@/widgets/PageWrapper";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinesh Harish Kumar | Full Stack Developer",
  description:
    "Portfolio of Dinesh Harish Kumar, an aspiring Full Stack Developer and Machine Learning Enthusiast building robust web applications.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Django", "Portfolio"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans bg-[#FAFAFA] text-[#111111] antialiased selection:bg-[#111111] selection:text-white`}>
        
        {/* Main Grid Wrapper - Strict Editorial Border */}
        <div className="w-full max-w-[1400px] mx-auto bg-white min-h-screen border-x border-gray-200 shadow-[0_0_40px_rgba(0,0,0,0.02)] flex flex-col">
          <Navbar />
          <RouteProgress />

          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>

          <Footer />
        </div>

        {process.env.NEXT_PUBLIC_MICROSOFT_CLARITY && (
          <Script
            id="microsoft-clarity-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
