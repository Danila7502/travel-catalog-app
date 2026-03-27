import React from 'react';

function Filter({ countries, selectedCountry, onFilterChange }) {
  return (
    <div className="filter-container">
      <label htmlFor="country-filter">Фильтр по стране: </label>
      <select 
        id="country-filter"
        value={selectedCountry} 
        onChange={(e) => onFilterChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Все страны</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;