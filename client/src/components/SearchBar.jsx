import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, setFiltersVisible }) => (
  <div style={{
    position: 'relative', height: '500px', width: '100%', backgroundColor: '#ccc',
    backgroundImage: 'url(https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg?strip=all&lossy=1&ssl=1)',
    backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '0px'
  }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find Your Dream Home</h1>
        <input
          type="text"
          placeholder="Enter an address, city, or ZIP code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem', color: 'black' }}
        />
        <button
          onClick={() => setFiltersVisible((prev) => !prev)} // Toggle filters visibility
          style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Show Filters
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
