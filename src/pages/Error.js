import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
   return <Hero>
      <Banner title="404" subtitle="no existe esa pagina">
         <Link to='/' className="btn-primary">
            Volver al inicio
      </Link>
      </Banner>
   </Hero>
}

export default Error;