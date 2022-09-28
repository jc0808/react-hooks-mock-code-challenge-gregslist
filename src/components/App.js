import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:6001/listings')
        .then(response => response.json())
        .then(data => setListings(data));
    }, 1000)



  }, [])

  function handleDelete(id) {
    const filtered = listings.filter(listing => { return listing.id !== id });

    setListings(filtered)
  }




  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
