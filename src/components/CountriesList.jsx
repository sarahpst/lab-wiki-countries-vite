import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountriesList() {
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((item, index) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`${item.alpha3Code}`}
              key={index}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
                alt={item.alpha2Code}
              />
              <div> {item.name.common}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
