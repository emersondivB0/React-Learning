import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  // get the image for every quote
  useEffect(() => {
    if (!fact) return;

    const threeFisrtWords = fact.split(" ", 3).join(" ");

    console.log(threeFisrtWords);

    fetch(
      `https://cataas.com/cat/says/${threeFisrtWords}?size=50&color=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
        console.log("Este es el url: ", url);
      });
  }, [fact]);
  return { imageUrl };
}
