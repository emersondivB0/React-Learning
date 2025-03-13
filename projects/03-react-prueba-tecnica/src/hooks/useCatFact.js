import { useState, useEffect } from "react";
import { getRandomFact } from "../logic/facts";

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  // get the quote
  useEffect(() => {
    refreshRandomFact;
  }, []);
  return { fact, refreshRandomFact };
}
