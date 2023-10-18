import '@/app/globals.css';
import { Gabarito } from 'next/font/google';
import NavBar from '@/components/NavBar';

const gabarito = Gabarito({ subsets: ['latin'] });

export const metadata = {
  title: 'Anime List',
  description: 'Learn Next js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${gabarito.className} bg-slate-700 text-white`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
