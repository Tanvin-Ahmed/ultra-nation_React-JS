import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, flag, capital, population, region, languages } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h4>{name}</h4>
      <h6>Capital : {capital}</h6>
      <p>Population : {population}</p>
      <p>
        <small>Region : {region}</small>
      </p>
      <p><small>Language : {languages[0].name}</small></p>
      <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;
