import React from 'react';

const SelectedCountry = (props) => {
    const selectedCountry = props.selectedCountry;
    console.log(selectedCountry)
    let totalPopulation = selectedCountry.reduce((totalPopulation, selectedCountry) => totalPopulation + selectedCountry.population ,0);
    return (
        <div>
            <h3>Selected Cuntry : {selectedCountry.length}</h3>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default SelectedCountry;