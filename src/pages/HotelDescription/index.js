import React from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

const HotelDescription = ({ data }) => {
  const { id } = useParams();
  const idInNumber = JSON.parse(id);

  return (
    <section className="Full">
      {data.filter((hotel) => idInNumber === hotel.id).map((hotel) => {
        return (
          <div key={hotel.id}>
            <h1>{hotel.name}</h1>
            <img src={hotel.image} alt={hotel.name} />
            <p>{hotel.nota}</p>
          </div>
        );
      }) }
    </section>
  );
};

export default HotelDescription;
