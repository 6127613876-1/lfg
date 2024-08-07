import React from "react";
import "../components/Movies.css";
import Header from "../components/Header"
import Events from "../components/Events"
import Footer from "../components/Footer"
import Highlight from "../components/Highlight"
import Home from "../components/Home"
import ComingSoon from "../components/ComingSoon"
import Movies from "../components/Movies"
const Movie = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Movies/>
      <ComingSoon/>
      <Highlight/>
      <Events/>
      <Footer/>
    </>
  )
}
export default Movies