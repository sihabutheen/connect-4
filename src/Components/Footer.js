import React from 'react'
import { player_playing } from './const';

const Footer = ({reset,computer,player_status}) => {
  const render_button=()=>{
    if(player_status === player_playing)
    {
      return <button onClick={computer}>computer</button>
    }
    return <button onClick={reset}>New Game</button>
  }
  return (
    <div className = "footer">
        
        {render_button()}
        
    </div>
  )
}

export default Footer;