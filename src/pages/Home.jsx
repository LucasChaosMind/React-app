import React from 'react'
import { Navbar, Announcement, Slider, Categories} from '../components'
import Products from '../components/Products';


//rafce
const Home = () => {
  return (
    <>
        <Announcement/>
        <Navbar/>  
        <Slider/>
        <Categories/>
        <Products/>
    </>
  )
}

export default Home;
