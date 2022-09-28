import React from "react";
import ListingCard from "./ListingCard";
import { v1 } from "uuid";

function ListingsContainer({ listings, handleDelete }) {

  const displayListings = listings.map(listing => {
    return (<ListingCard key={v1()} description={listings.description}
      image={listing.image} location={listing.location} handleDelete={handleDelete} id={listing.id} />)
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}

      </ul>
    </main>
  );

}

export default ListingsContainer;
