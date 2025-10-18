import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Band Travel',
  description: 'Trips you trust. Memories you\'ll never forget.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

