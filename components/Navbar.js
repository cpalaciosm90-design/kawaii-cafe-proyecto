import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#d4edda', display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ color: '#2c6e49' }}>🍵 Matcha & Kawaii</h2>
      <div>
        <Link href="/" style={{ marginRight: '1rem', color: '#333' }}>Inicio</Link>
        <Link href="/menu" style={{ color: '#333' }}>Menú Dinámico</Link>
      </div>
    </nav>
  );
}