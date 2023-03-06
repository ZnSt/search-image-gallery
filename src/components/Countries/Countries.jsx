export const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          <img src={country.flags.png} alt="flag" style={{ width: '100px' }} />

          <p>Name: {country.name.official}</p>
          <p>Capital: {country.capital}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
};
