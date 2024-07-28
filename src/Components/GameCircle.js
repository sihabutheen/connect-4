import React from 'react'
import '../Game.css'



const GameCircle = ({id,className,onCirClicked,children}) => {


  return (
    <div className={`gamecircle ${className}`} onClick={() => onCirClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle;