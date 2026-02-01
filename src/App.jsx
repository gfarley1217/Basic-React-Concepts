import { useRef, useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const medals = useRef([
    { id: 1, name: "Gold" },
    { id: 2, name: "Silver" },
    { id: 3, name: "Bronze" },
  ]);

  const [countries, setCountries] = useState([
    { id: 1, name: "United States", Gold: 2, Silver: 1, Bronze: 0 },
    { id: 2, name: "China", Gold: 3, Silver: 0, Bronze: 2 },
    { id: 3, name: "France", Gold: 0, Silver: 2, Bronze: 1 },
  ]);

  function handleDelete(countryId) {
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  return (
    <div>
      <header className="app-header">Olympic Medals</header>

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            medals={medals.current}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
