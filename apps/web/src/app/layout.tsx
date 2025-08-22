import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import providers and components
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TalentFlux - Intelligent HR Recruitment Platform',
  description: 'Find, match, and hire top talent 3× faster—with auditable AI you can trust.',
  keywords: 'recruitment, HR, AI, hiring, talent acquisition, candidate matching',
  authors: [{ name: 'TalentFlux Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'TalentFlux - Intelligent HR Recruitment Platform',
    description: 'Find, match, and hire top talent 3× faster—with auditable AI you can trust.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentFlux - Intelligent HR Recruitment Platform',
    description: 'Find, match, and hire top talent 3× faster—with auditable AI you can trust.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-neutral-50 dark:bg-neutral-900`}>
        <Providers>
          <div className="flex h-full">
            {/* Sidebar Navigation */}
            <Sidebar />
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header */}
              <Header />
              
              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
