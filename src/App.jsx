import "./App.css";
import jsonData from "./countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";

function App() {
  const [countries] = useState(jsonData);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <CountryDetails />
        </div>
      </div>
    </div>
  );
}
export default App;
