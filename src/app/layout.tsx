import "@/styles/globals.css";

import { Outfit as FontSans } from "next/font/google";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/theme/theme-provider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dnb On The Bike",
  description: "Playlists for Dnb On The Bike",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background bg-neutral-200 bg-opacity-50 font-sans text-neutral-950 antialiased dark:bg-neutral-900 dark:text-neutral-50 dark:text-opacity-90",
          fontSans.variable,
        )}
      >
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
    </html>
  );
}
