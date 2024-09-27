import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comunidad AGI",
  description: "Conectando mentes en Inteligencia Artificial en Latinoamérica.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={true}
      >
        <body className={`${geistMono.variable} font-mono antialiased bg-background text-foreground transition-colors duration-300`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
