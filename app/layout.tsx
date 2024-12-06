import './globals.css';
import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import { RootProvider } from '@/components/root-provider';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'RentSpace | Modern Rental Platform',
  description: 'Find your perfect rental home with AI-powered matching and exclusive perks.',
  keywords: 'rental, apartment, housing, property management, tenant screening',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <RootProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}