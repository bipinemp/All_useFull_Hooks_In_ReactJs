import { useFetch } from "./hooks/useFetch";

function App() {
  const { loading, error, data, reFetch } = useFetch(
    "https://api.quotable.io/random"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div className="App">
      <p>{data}</p>
      <button onClick={reFetch}>Refetch</button>
    </div>
  );
}

export default App;
