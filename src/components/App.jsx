import { useState, useEffect } from 'react';
import axios from 'axios';
import { Countries } from './Countries';
import { Paginations } from './Paginatios';

export const App = () => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(response.data);
      setLoading(false);
    };

    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Paginations
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
};
