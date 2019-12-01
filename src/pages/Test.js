import React, { Component } from 'react'
import { RoomContext } from '../context'

export default class Test extends Component {
   static contextType = RoomContext


   render() {
      const { name, greeting, decirHola } = this.context
      const saludar = decirHola
      return (
         <div>
            <button type="button" className="btn-primary" onClick={saludar(greeting, name)}>
               click aquí
            </button>
         </div>
      )
   }
}
