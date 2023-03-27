import { useState, useEffect } from "react";

const usePokemonFlavorText = (pokemon) => {
  const [flavorTexts, setFlavorTexts] = useState([]);
  const enFlavorText = flavorTexts.filter(
    (flavorText) => flavorText.language.name === "en"
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(pokemon.species.url);
      const data = await res.json();
      setFlavorTexts(data.flavor_text_entries);
    })();
  }, [pokemon]);

  return enFlavorText;
};

export default usePokemonFlavorText;
