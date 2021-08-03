import React from "react";
import { Header, SearchComponent } from "../../components";
import CardComponent from "../../components/highlights";
import { card } from "../../services/api";

const Home = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <CardComponent data={card} />
    </>
  );
};

export default Home;
