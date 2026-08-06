export default function ProductCard({ title, image }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '15px', padding: '1rem', textAlign: 'center', backgroundColor: '#fff' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h3 style={{ marginTop: '10px', color: '#d63384' }}>{title}</h3>
    </div>
  );
}