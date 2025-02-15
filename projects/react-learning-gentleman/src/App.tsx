import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(true);
    console.info(loading);
  };

  const fetchData = async () => {
    consoleLoader(true);
    try {
      const response = await fetch("https://www.google.com");

      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as string);
      console.log(err);
    } finally {
      consoleLoader(false);
    }
  };

  // communicate with endpoint - entity external to the component
  // asynchronous operation
  // parameters of entry
  //
  //
  // manage the life cycle of the component
  //The real use of `useEffect()` is to synchronize with external entities.
  useEffect(() => {
    fetchData();
    // 1. Executes when the component is mounted
    // 2. Executes when the value of the state is modified (dependencies array)

    //return () => {};
  }, [data]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Ups! Hay un error {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
