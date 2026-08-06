export const metadata = {
  title: 'Matcha & Kawaii Cafe | Inicio',
  description: 'La mejor cafetería temática japonesa con postres kawaii y auténtico matcha.',
  openGraph: {
    title: 'Matcha & Kawaii Cafe',
    description: 'Cafetería de especialidad japonesa.',
  }
};

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#2c6e49' }}>¡Bienvenido a Matcha & Kawaii Cafe! 🍡</h1>
      <p>Disfruta de nuestros lattes de matcha y repostería inspirada en Japón.</p>
    </div>
  );
}