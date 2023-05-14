import "./App.css";
import jsonData from "./countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";


function App() {
  const [countries] = useState(jsonData);



  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}></CountriesList>
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
