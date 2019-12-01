import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
   static contextType = RoomContext
   render() {
      //const value = this.context
      /* console.log(value)
      const { name, greeting } = this.context */
      let { loading, featuredRooms: rooms } = this.context
      rooms = rooms.map(room => {
         return <Room key={room.id} room={room} />
      })
      //console.log(rooms);
      return (
         <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
               {/* hola {name} from featured rooms {greeting} */}

               {/* loading ? <Loading /> :  */rooms}


            </div>
         </section>
      )
   }
}
