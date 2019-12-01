import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
//import Button from '../components/StyledHero'
//import Test from './Test'


const Home = () => {
   return (
      <>{/* react fragment */}
         <Hero hero="defaultHero">
            <Banner title="Cuartos Lujosos" subtitle="cuartos de lujo a partir de 2000$">
               <Link to="/rooms" className="btn-primary">
                  nuestros cuartos
            </Link>
            </Banner>
         </Hero>
         <Services />
         <FeaturedRooms />
         {/* <Button>componente estilizado</Button> */}
         {/*  <Test /> */}

      </>
   )
}

export default Home;
