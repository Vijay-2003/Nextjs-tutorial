import { Arimo, Inter} from 'next/font/google'

export const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--primary-font'
})
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--secondary-font'
})

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}