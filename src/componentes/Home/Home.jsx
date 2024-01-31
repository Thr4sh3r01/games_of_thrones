import React from "react";

import "../Home/Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <span className="Games-of-Thrones Text-Style-4">Games of thrones</span>
      <Footer></Footer>
    </div>
  );
};

export default Home;
