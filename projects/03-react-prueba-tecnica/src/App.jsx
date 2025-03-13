import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
// const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words of ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
