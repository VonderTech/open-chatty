import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Open Chatty',
  description: 'Displaying OpenAI results using Server Sent Events',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-base-100`}>
        <div className="min-h-screen">
          <div className="flex flex-col min-h-screen">
            <header className="bg-base-100 shadow"></header>
            <main className="flex flex-grow items-stretch">
              <div className="flex-auto m-8">{children}</div>
            </main>
            <footer className="bg-base-600 py-4">
              <div className="container mx-auto px-4">
                <p className="text-center">
                  &copy; {new Date().getFullYear()} Open Chatty
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
