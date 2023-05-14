import React from "react";
import { useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  const getCountry = (code) => {
    return countries.find((x) => x.alpha3Code === code);
  };

  let currentCountry = getCountry(alpha3Code);

  return (
    <div className="col-7">
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{currentCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={`/${item}`}>{getCountry(item).name.common}</a>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
