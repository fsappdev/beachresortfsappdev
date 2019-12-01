import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Styledhero from '../components/StyledHero';

export default class SingleRoom extends Component {
   constructor(props) {
      super(props)
      //console.log(this.props);
      this.state = {
         slug: this.props.match.params.slug,
         defaultBcg
      }
   }


   static contextType = RoomContext
   render() {
      const { getRoom } = this.context
      const room = getRoom(this.state.slug)
      if (!room) {
         return <div className="error">
            <h3>no existe ese cuarto</h3>
            <Link to="/rooms" className="btn-primary">
               back to rooms
            </Link>
         </div>
      }
      const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
      const [mainImg, ...defaultImg] = images;
      console.log(defaultImg);
      return (
         <>
            <Styledhero img={mainImg || this.state.defaultBcg}>
               <Banner title={`${name} room`}>
                  <Link to="/rooms" className="btn-primary"> back to rooms
               </Link>
               </Banner>
            </Styledhero>
            <section className="single-room">
               <div className="single-room-images">
                  {defaultImg.map((item, index) => {
                     return <img key={index} src={item} alt={name}></img>
                  })}
               </div>
               <div className="single-room-info">
                  <article className="desc">
                     <h3>detalles</h3>
                     <p>{description}</p>
                  </article>
                  <article className="info">
                     <h3>info </h3>
                     <h6>precio: ${price}</h6>
                     <h6>size: ${size} Mts2</h6>
                     <h6>
                        capacidad máxima : {
                           capacity > 1 ? `${capacity} personas` : `${capacity} personas`}
                     </h6>
                     <h6>{pets ? "se permiten mascotas" : "no se permiten mascotas"}</h6>
                     <h6>{breakfast && "desayuno gratis"}</h6>
                  </article>
               </div>
            </section>
            <section className="room-extras">
               <ul className="extras">
                  {extras.map((item, index) => {
                     return <li key="index">  {item} <span>♠ {/* emoji &#x1F468;&#x200D;&#x1F9B1; */} </span></li>
                  })}
               </ul>
            </section>
         </>
      )
   }
}
