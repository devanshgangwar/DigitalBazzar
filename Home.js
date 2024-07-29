import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'


const Home = () => {
  const mydata = {
    name: "Dev Store",
  }

  return (<>
    <HeroSection data={mydata} />
    <FeatureProduct/>
    <Services />
    <Trusted />
   
  </>

  )
}


export default Home