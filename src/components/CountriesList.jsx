import React from "react";

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((item) => {
          return (
            <a
              className="list-group-item list-group-item-action"
              href={`/${item.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
                alt={item.alpha2Code}
              />
              <div> {item.name.common}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
