import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Menú | Matcha & Kawaii Cafe',
  description: 'Descubre nuestros postres japoneses, menú pet-friendly y postres del mundo.',
};

// 1. Vectores Kawaii
const imgMatcha = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23d4edda"/><circle cx="150" cy="110" r="50" fill="%232c6e49"/><rect x="110" y="70" width="80" height="20" rx="10" fill="%23ffffff"/><path d="M 130 90 Q 150 120 170 90" stroke="%23ffffff" stroke-width="4" fill="none"/></svg>`;
const imgLatte = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23fff0f5"/><circle cx="150" cy="110" r="50" fill="%236f4e37"/><circle cx="150" cy="105" r="35" fill="%23ffffff"/><path d="M 140 105 C 140 95, 160 95, 160 105 C 160 115, 140 120, 150 125 C 160 120, 140 115, 140 105" fill="%236f4e37"/></svg>`;
const imgMacaron = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23f8d7da"/><rect x="90" y="70" width="120" height="25" rx="12" fill="%23ff85a2"/><rect x="95" y="92" width="110" height="10" fill="%23ffffff"/><rect x="90" y="100" width="120" height="25" rx="12" fill="%23ff85a2"/><circle cx="120" cy="80" r="2" fill="%23000"/><circle cx="140" cy="80" r="2" fill="%23000"/><path d="M 127 83 Q 130 87 133 83" stroke="%23000" stroke-width="1.5" fill="none"/></svg>`;
const imgDango = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23f0fff0"/><line x1="150" y1="30" x2="150" y2="170" stroke="%23d2b48c" stroke-width="8" stroke-linecap="round"/><circle cx="150" cy="60" r="25" fill="%23ffb6c1"/><circle cx="150" cy="105" r="25" fill="%23ffffff"/><circle cx="150" cy="150" r="25" fill="%2390ee90"/></svg>`;

// 2. Vectores Pet-Friendly
const imgPuppuccino = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23e6e6fa"/><path d="M 110 100 L 190 100 L 170 160 L 130 160 Z" fill="%23ffffff"/><path d="M 120 100 Q 150 60 180 100" fill="%23ffffe0"/><circle cx="150" cy="70" r="10" fill="%23d2b48c"/></svg>`;
const imgGalleta = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23ffe4e1"/><circle cx="110" cy="90" r="15" fill="%23d2b48c"/><circle cx="110" cy="110" r="15" fill="%23d2b48c"/><circle cx="190" cy="90" r="15" fill="%23d2b48c"/><circle cx="190" cy="110" r="15" fill="%23d2b48c"/><rect x="110" y="85" width="80" height="30" fill="%23d2b48c"/></svg>`;


const kawaiiMenu = [
  { id: 'k1', title: 'Matcha Latte Kawaii', image: imgMatcha },
  { id: 'k2', title: 'Latte Art Especial', image: imgLatte },
  { id: 'k3', title: 'Macarons Kawaii', image: imgMacaron },
  { id: 'k4', title: 'Dango Dulce Tricolor', image: imgDango }
];

const petMenu = [
  { id: 'p1', title: 'Puppuccino', image: imgPuppuccino },
  { id: 'p2', title: 'Galletitas Perrunas', image: imgGalleta }
];

// Consumo de API
async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error al cargar el menú');
  return res.json();
}

export default async function Menu() {
  const data = await getDesserts();
  const apiDesserts = data.meals.slice(0, 4);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#d63384', marginBottom: '2rem' }}>Especialidades Kawaii 🌸</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {kawaiiMenu.map((item) => (
          <ProductCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      <h2 style={{ textAlign: 'center', color: '#8b4513', marginBottom: '2rem' }}>Menú Pet-Friendly 🐾</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem', justifyContent: 'center' }}>
        {petMenu.map((item) => (
          <ProductCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      <h2 style={{ textAlign: 'center', color: '#2c6e49', marginBottom: '2rem' }}>Postres del Mundo (Vía API) 🌍</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {apiDesserts.map((item) => (
          <ProductCard key={item.idMeal} title={item.strMeal} image={item.strMealThumb} />
        ))}
      </div>
    </div>
  );
}