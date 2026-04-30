type Props = {
  cambiarIdioma: (idioma: 'es') => void;
};

export default function BotonEspanol({ cambiarIdioma }: Props) {
  return (
    <button onClick={() => cambiarIdioma('es')}>
      Español
    </button>
  );
}
