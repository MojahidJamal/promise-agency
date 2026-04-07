import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promise Agency',
  description: 'Our promise.. service you can trust.',
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

