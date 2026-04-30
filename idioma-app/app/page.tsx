'use client';
import { useState, useEffect } from 'react';
import BotonEspanol from './components/BotonEspanol';
import BotonIngles from './components/BotonIngles';

const palabras = [
  { es: "Casa", en: "House" },
  { es: "Perro", en: "Dog" },
  { es: "Comida", en: "Food" },
  { es: "Escuela", en: "School" },
  { es: "Libro", en: "Book" },
  { es: "Mesa", en: "Table" },
  { es: "Silla", en: "Chair" },
  { es: "Agua", en: "Water" },
  { es: "Sol", en: "Sun" },
  { es: "Luna", en: "Moon" }
];

export default function App() {
  const [idioma, setIdioma] = useState<'es' | 'en'>('es');
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    const nuevaLista = palabras.map(p => p[idioma]);
    setLista(nuevaLista);
  }, [idioma]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cambiar Idioma</h1>

      <BotonEspanol cambiarIdioma={setIdioma} />
      <BotonIngles cambiarIdioma={setIdioma} />

      <ul>
        {lista.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </div>
  );
}
