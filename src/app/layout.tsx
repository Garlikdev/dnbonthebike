import "@/styles/globals.css";

// import { Outfit as FontSans } from "next/font/google";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/theme/theme-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata = {
  title: "Dnb On The Bike",
  description: "Dom Whiting Tracklists",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${GeistSans.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-background bg-neutral-200 bg-opacity-50 font-sans text-neutral-950 antialiased dark:bg-neutral-900 dark:text-neutral-50 dark:text-opacity-90">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen flex-col">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId="GTM-KP226FVQ" />
      <GoogleAnalytics gaId="G-2JN203KPFG" />
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2JN203KPFG"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2JN203KPFG');
        `}
      </Script> */}
    </html>
  );
}
