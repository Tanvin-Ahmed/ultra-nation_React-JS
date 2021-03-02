import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import SelectedCountry from "./components/Country/selectedCountry/SelectedCountry";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const handleAddCountry = (country) => {
    const newSelectedCountry = [...selectedCountry, country];
    setSelectedCountry(newSelectedCountry);
  }
  return (
    <div className="App container-fluid">
      <h1>Countries Loded {countries.length}</h1>
      <SelectedCountry selectedCountry={selectedCountry}></SelectedCountry>
      <div className="countries">
      {countries.map((country) => (
        <Country key={country.alpha3Code} country={country} handleAddCountry={handleAddCountry}></Country>
      ))}
      </div>
    </div>
  );
}

export default App;
