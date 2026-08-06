'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ textAlign: 'center', color: 'red', padding: '2rem' }}>
      <h2>¡Ups! Nuestros ninjas tropezaron trayendo el menú. 🥷</h2>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Intentar nuevamente
      </button>
    </div>
  );
}