import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'sans-serif', backgroundColor: '#fff5f8', margin: 0 }}>
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}