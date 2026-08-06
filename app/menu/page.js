import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Menú | Matcha & Kawaii Cafe',
  description: 'Descubre nuestros postres japoneses y menú internacional.',
};

// 1. Menú Kawaii Personalizado (2 Cafés y 2 Postres - Enlaces de Wikipedia 100% seguros)
const kawaiiMenu = [
  { id: 'k1', title: 'Matcha Latte Kawaii', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Matcha_latte.jpg/500px-Matcha_latte.jpg' },
  { id: 'k2', title: 'Latte Art Especial', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/500px-Cappuccino_at_Sightglass_Coffee.jpg' },
  { id: 'k3', title: 'Macarons de Colores', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Macarons_-_Beurrage_noisette.jpg/500px-Macarons_-_Beurrage_noisette.jpg' },
  { id: 'k4', title: 'Dango Dulce Tricolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hanami_dango_001.jpg/500px-Hanami_dango_001.jpg' }
];

// 2. Consumo de API Pública
async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Error al cargar el menú');
  }
  return res.json();
}

export default async function Menu() {
  const data = await getDesserts();
  const apiDesserts = data.meals.slice(0, 4);

  return (
    <div>
      {/* SECCIÓN 1: menú temático */}
      <h1 style={{ textAlign: 'center', color: '#d63384', marginBottom: '2rem' }}>Especialidades Kawaii 🌸</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {kawaiiMenu.map((item) => (
          <ProductCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      {/* SECCIÓN 2: La API */}
      <h2 style={{ textAlign: 'center', color: '#2c6e49', marginBottom: '2rem' }}>Postres del Mundo (Vía API) 🌍</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {apiDesserts.map((item) => (
          <ProductCard key={item.idMeal} title={item.strMeal} image={item.strMealThumb} />
        ))}
      </div>
    </div>
  );
}