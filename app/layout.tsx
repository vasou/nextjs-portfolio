import type { Metadata } from "next";
import "./styles/style.css";
import PageLayout from "./components/PageLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "John doe",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-94WXX6PKXY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-94WXX6PKXY');
        `}
      </Script>
      <body className="theme-a">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
