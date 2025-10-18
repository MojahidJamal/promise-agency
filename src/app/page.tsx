import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Arabic by default
  redirect('/ar');
}
