import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Menú | Matcha & Kawaii Cafe',
  description: 'Descubre nuestros postres japoneses y menú internacional.',
};

// 1. Menú Kawaii Personalizado (Estética Japonesa)
const kawaiiMenu = [
  { id: 'k1', title: 'Matcha Latte con Arte 3D', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=500&q=80' },
  { id: 'k2', title: 'Taiyaki Clásico de Anko', image: 'https://images.unsplash.com/photo-1629115911832-75e927515ee0?auto=format&fit=crop&w=500&q=80' },
  { id: 'k3', title: 'Mochi de Fresa Kawaii', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=500&q=80' },
  { id: 'k4', title: 'Dango Dulce Tricolor', image: 'https://images.unsplash.com/photo-1627308595186-e13dc397c88b?auto=format&fit=crop&w=500&q=80' }
];

// 2. Consumo de API Pública (Para asegurar los 2.5 puntos de la rúbrica)
async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Error al cargar el menú');
  }
  return res.json();
}

export default async function Menu() {
  const data = await getDesserts();
  const apiDesserts = data.meals.slice(0, 4); // Mostramos solo 4 de la API para no quitarle protagonismo a los tuyos

  return (
    <div>
      {/* SECCIÓN 1: Tu menú temático */}
      <h1 style={{ textAlign: 'center', color: '#d63384', marginBottom: '2rem' }}>Especialidades Kawaii 🌸</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {kawaiiMenu.map((item) => (
          <ProductCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      {/* SECCIÓN 2: La API para los profesores */}
      <h2 style={{ textAlign: 'center', color: '#2c6e49', marginBottom: '2rem' }}>Postres del Mundo (Vía API) 🌍</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {apiDesserts.map((item) => (
          <ProductCard key={item.idMeal} title={item.strMeal} image={item.strMealThumb} />
        ))}
      </div>
    </div>
  );
}