
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext'

const About = () => {

  const {myName} = useProductContext();

  const mydata ={
    name : "Dev Ecommerce",
  }
  return (
    <>
       {myName}
      <HeroSection data={mydata} />
    </>
  )
}

export default About