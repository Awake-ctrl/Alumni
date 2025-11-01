// import React from 'react';
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Image_swap from "../components/Image_swap/Image_swap"
import { useState } from "react"
import { useEffect } from 'react';
import ReachUs from "../components/ReachUs/ReachUs"
import Main from "../components/Main/Main"
import AlumniServices from "../components/AlumniServices/AlumniServices"

// import Swap from "../components/Image_swap/Swap"

const Home = () => {
    const [imgcount, setimgcount] = useState(0)
  const [playstatus, setplaystatus] = useState(true)
  
    useEffect(() => {
        const interval = setInterval(() => {
          setimgcount((count) => (count === 4 ? 0 : count + 1));
        }, 3000);
      
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [setimgcount]);
  
  return (
      <div>
          <Navbar />
          <Image_swap
              setplaystatus={setplaystatus}
              playstatus={playstatus}
              imgcount={imgcount}
        setimgcount={setimgcount} />
          <Main/>
          <AlumniServices />
          <ReachUs/>
          <Footer/> 
      </div>
  )
}

export default Home