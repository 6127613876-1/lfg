import React from "react";
import "../components/Movies.css";
import Header from "../components/Header"
import Events from "../components/Events"
import Footer from "../components/Footer"
import Highlight from "../components/Highlight"
import Home from "../components/Home"
import ComingSoon from "../components/ComingSoon"
import Movies from "../components/Movies"
import Profile from "../components/Profile";
const Movie = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    
      <Home/>
      <Movies/>
      <ComingSoon/>
      <Highlight/>
      <Events/>
      <Footer/>
    </>
  )
}
export default Movie