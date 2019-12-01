import React, { Component } from 'react'
//aca va la importacion de un title?
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
   //logica del componente
   state = {
      services: [
         {
            icon: <FaCocktail />,
            title: "Cockteles Gratis",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias.'
         },
         {
            icon: <FaHiking />,
            title: "Endless hiking",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias.'
         },
         {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias.'
         },
         {
            icon: <FaBeer />,
            title: "Cerveza!",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias.'
         }

      ]
   }
   //
   render() {
      return (
         <section className="services">
            <Title title="Nuestros Servicios" />
            <div className="services-center">
               {this.state.services.map((item, index) => {
                  return <article key={index} className="service">
                     <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                  </article>
               })}
            </div>
         </section>
      )
   }
}
