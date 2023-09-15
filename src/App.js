import React from 'react'
import Home from "./components/Home/Home.jsx"
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie.jsx"
import NewArrive from './components/NewArrival/NewArrive.jsx'
import Footer from './components/Footer/Footer.jsx'




const App = () => {
  return (
    <>
     <Home />
     <FeaturedMovie />
     <NewArrive />
     <Footer />
     
    </>
  )
}

export default App;