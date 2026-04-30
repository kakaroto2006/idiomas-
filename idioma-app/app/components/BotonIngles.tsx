type Props = {
  cambiarIdioma: (idioma: 'en') => void;
};

export default function BotonIngles({ cambiarIdioma }: Props) {
  return (
    <button onClick={() => cambiarIdioma('en')}>
      Inglés
    </button>
  );
}
