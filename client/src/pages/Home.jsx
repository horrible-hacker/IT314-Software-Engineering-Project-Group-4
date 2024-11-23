import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import PropertyList from '../components/PropertyList.jsx';
import styles from '../components/style.jsx';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    price: 5000000,
    type: null,
    bedrooms: null,
    gym: false,
    parking: false,
    garden: false,
    furnished: false
  });
  const [displayProperties, setdisplay] = useState([]);
  // Function to handle search
  const applyFilters = async () => {
    let result = [...properties]; // Start with all properties

    // Filter by price (less than)
    if (filters.price) {
      result = result.filter(property =>
        property.price <= filters.price
      )
    }

    // Filter by type
    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }

    // Filter by bedrooms
    if (filters.bedrooms>0) {
      if(filters.bedrooms<4)
      {
      result = result.filter(property => property.bedrooms === filters.bedrooms);
      }
      else
      {
        result = result.filter(property => property.bedrooms >= filters.bedrooms);
      }
    }

    if (filters.gym == true) {
      result = result.filter(property => property.gym == filters.gym);
      setFilters(prev => ({ ...prev, gym: "false" }));
    }
    if (filters.parking == true) {
      result = result.filter(property => property.parking == filters.parking);
      setFilters(prev => ({ ...prev, parking: "false" }));
    }
    if (filters.garden == true) {
      result = result.filter(property => property.garden == filters.garden);
      setFilters(prev => ({ ...prev, garden: "false" }));
    }
    if (filters.furnished == true) {
      result = result.filter(property => property.furnished == filters.furnished);
      setFilters(prev => ({ ...prev, furnished: "false" }));
    }
    console.log(result);
    setFilteredProperties(result);
    setdisplay(result);
    setFiltersVisible(false);

  };
  const fetchProperties = async (query) => {
    try {
      //let urla = 'http://localhost:3000/api/property';
      let city = ''; 
      const requestOptions = {
        method: 'GET',
      };
      const cityResponse = await fetch(
        "https://api.geoapify.com/v1/ipinfo?&apiKey=7ef05e518d324a3d937232d6b95c1698",
        requestOptions
      );
      const cityData = await cityResponse.json();


      if (cityData && cityData.city && cityData.city.name) {
        city = cityData.city.name;
      }
      let des = query;
      if (query) {
        des = query;
      } else if (city) {
        des = city;
      }
      const response = await fetch(`/api/property?searchQuery=${encodeURIComponent(des)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response_data = await response.json();
      setProperties(response_data);
      setdisplay(response_data);
    } catch (error) {
      console.error('Error fetching properties', error);
    }
  };

  // Use effect to trigger fetching properties on page load
  useEffect(() => {
    fetchProperties(searchQuery)
    setFilters({
      price: 5000000000000, type: null, bedrooms: 0, gym: false,
      parking: false,
      garden: false,
      furnished: false
    }); // Pass an object
  }, [searchQuery]);

  return (
    <div style={{ display: 'flex' }}>
      {filtersVisible && (
        <div
          style={{
            width: '300px',
            height: '100vh',
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            position: 'fixed',
            left: '0',
            top: '0',
            zIndex: '1000',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h3>Filters</h3>
          {/* Add your filter components here */}
          <label>Price Range</label>
          <div style={styles.priceRange}>
            <input type="number" onChange={(e) => setFilters(prev => ({ ...prev, price: e.target.value }))} placeholder="Rs.500000.0" style={styles.priceInput} />
          </div>
          <br />
          <div style={styles.filterGroup}>
            <h3>Faciltiy</h3>
            <div style={styles.filterOption}><input type="checkbox" name="apartments" onChange={(e) => setFilters((prev) => ({ ...prev, parking: e.target.checked ? true : false, }))} /> <label>Parking</label></div>
            <div style={styles.filterOption}><input type="checkbox" name="apartments" onChange={(e) => setFilters((prev) => ({ ...prev, gym: e.target.checked ? true : false, }))} /> <label>Gym</label></div>
            <div style={styles.filterOption}><input type="checkbox" name="apartments" onChange={(e) => setFilters((prev) => ({ ...prev, gardern: e.target.checked ? true : false, }))} /> <label>Garden</label></div>
            <div style={styles.filterOption}><input type="checkbox" name="apartments" onChange={(e) => setFilters((prev) => ({ ...prev, furnished: e.target.checked ? true : false, }))} /> <label>Furnished</label></div>
          </div>

          {/* Type Filter */}
          <div style={styles.filterGroup}>
            <h3>Type</h3>
            <div style={styles.filterOption}><input type="radio" value="rent" onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))} name="type" /> <label> Rent</label></div>
            <div style={styles.filterOption}><input type="radio" value="sale" onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))} name="type" /> <label> Sale</label></div>
          </div>

          {/* Bedrooms Filter */}
          <div style={styles.filterGroup}>
            <h3>Bedrooms</h3>
            <div style={styles.filterOption}><input value = "1" type="radio" onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))} name="bedrooms" /> <label>1 BHK</label></div>
            <div style={styles.filterOption}><input value="2" type="radio" onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))} name="bedrooms" /> <label>2 BHK</label></div>
            <div style={styles.filterOption}><input value="3" type="radio" onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))} name="bedrooms" /> <label>3 BHK</label></div>
            <div style={styles.filterOption}><input value="4" type="radio" onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))} name="bedrooms" /> <label>More Than 4 BHK</label></div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <button onClick={() => {
              setFiltersVisible(false);
              applyFilters();
            }} style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
              Apply Filters
            </button>
          </div>
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => {
                setFilters({ price: 500000000000, type: null, bedrooms: null, gym: false, parking: false, gardern: false, furnished: false }); // Reset filters
                fetchProperties(searchQuery).then(() => {
                  setdisplay(properties); // Ensure displayProperties is updated
                });
                setFiltersVisible(false);
              }} style={{ padding: '0.5rem 0.6rem', backgroundColor: '#28a745', color: 'white', border: 'none' }}
            >
              Discard Filters
            </button>
          </div>
        </div>
      )
      }
      <div style={{ marginLeft: filtersVisible ? '300px' : '0', width: '100%', transition: 'margin-left 0.3s ease' }}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFiltersVisible={setFiltersVisible} />

        <PropertyList properties={displayProperties} />
      </div>
    </div>
  );
}
