import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Band Travel',
  description: 'Trips you trust. Memories you\'ll never forget.',
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

