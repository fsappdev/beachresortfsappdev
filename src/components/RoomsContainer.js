import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

const RoomsContainer = ({ context }) => {
   const { loading, sortedRooms, rooms } = context
   /* if (loading) {
      return <Loading />
   } */
   return (
      <>
         <RoomsFilter rooms={rooms} />
         <RoomsList rooms={sortedRooms} />
      </>
   )
}

export default withRoomConsumer(RoomsContainer)

/*
const RoomsContainer = () => {
   return (
      <RoomConsumer>
         {
            (value) => {
               //console.log(value);
               const { loading, sortedRooms, rooms } = value
               if (Loading) {
                  return <Loading />
               }

               return (
                  <div>
                     hello from rooms container
                    <RoomsFilter rooms={rooms} />
                     <RoomsList rooms={sortedRooms} />
                  </div>
               )
            }
         }
      </RoomConsumer>
   )
}

export default RoomsContainer
 */