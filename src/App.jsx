import { useRef, useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  function handleIncrement(countryId, medalName) {
    setCountries(
      countries.map((c) =>
        c.id === countryId ? { ...c, [medalName]: c[medalName] + 1 } : c
      )
    );
  }

  function handleDecrement(countryId, medalName) {
    setCountries(
      countries.map((c) => {
        if (c.id !== countryId) return c;
        const currentCount = c[medalName];
        if (currentCount === 0) return c;
        return { ...c, [medalName]: currentCount - 1 };
      })
    );
  }

  const totalGold = countries.reduce((sum, c) => sum + c.gold, 0);
  const totalSilver = countries.reduce((sum, c) => sum + c.silver, 0);
  const totalBronze = countries.reduce((sum, c) => sum + c.bronze, 0);
  const totalAllMedals = totalGold + totalSilver + totalBronze;

  return (
    <div>
      <header className="app-header">Olympic Medals</header>

      <div className="totals">
        <div>Total Gold: {totalGold}</div>
        <div>Total Silver: {totalSilver}</div>
        <div>Total Bronze: {totalBronze}</div>
        <div>Total Medals: {totalAllMedals}</div>
      </div>

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            medals={medals.current}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
