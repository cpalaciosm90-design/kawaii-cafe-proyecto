import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Menú | Matcha & Kawaii Cafe',
  description: 'Descubre nuestros postres traídos desde la API.',
};

// Consumo de API Pública (TheMealDB)
async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Error al cargar el menú');
  }
  return res.json();
}

export default async function Menu() {
  const data = await getDesserts();
  const desserts = data.meals.slice(0, 8); // Tomamos solo 8 para mantener el diseño limpio

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#d63384' }}>Nuestro Menú Kawaii 🍰</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {desserts.map((item) => (
          <ProductCard key={item.idMeal} title={item.strMeal} image={item.strMealThumb} />
        ))}
      </div>
    </div>
  );
}