import { useEffect, useState } from 'react'
import countryService from '../service/getCountries'
import CountryDetails from './components/CountryDetails'

function App() {
  const [country, setCountry] = useState('')
  const [list, setList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null);

  const submit = (e) => {
    e.preventDefault();
  }
  const handleCountryChange = (e) => {
    // console.log(e.target.value)
    setCountry(e.target.value)
    setSelectedCountry(null); 
  }

  useEffect( () => {
    countryService
      .getAllCountries()
      .then(initialCountries => {
        setList(initialCountries)
      })
  }, [])

  const searchCountries = list.filter(searchCountry=> {
    const countryName = searchCountry.name.common.toLowerCase() || searchCountry.name.official.toLowerCase()
    const searchValue = country.toLowerCase()
    return countryName.includes(searchValue)
  })

  const handleSelectedCountry = (country) => {
    console.log(country)
    setSelectedCountry(country)
  }
  

  // const listCountry = list.filter((c) => {
  //   const search = c.name.common
  //   console.log(search)
  // })
  return (
    <>
      <div>
        <form onSubmit={submit}> 
          <label htmlFor="">find countries</label>
          <input onChange={handleCountryChange}
          type="text"
          value={country} />
        </form>

        {searchCountries.length === 0 && <p>No countries found</p>}

        {searchCountries.length === 1 && (
          <CountryDetails country={searchCountries[0]} />
        )}

        {
          searchCountries.length > 10 ? (
            <p>Too many countries, please specify another filter</p>
          ) : 
        (
        searchCountries.map((country, index) => (
          <div key={index}>{country.name.common}
            <button onClick={() => handleSelectedCountry(country)}>show</button>
          </div>
        ))
        )
        }
        {selectedCountry && <CountryDetails country={selectedCountry} />}
      </div>
    </>
  )
}

export default App
