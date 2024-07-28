import React from 'react'
import {
    player_wins,
} from './const';

const status = (player,player_status ,winner) =>
{
    if (player_status === player_wins){
        return <div>{`player ${winner} wins `}</div>
    }
    else if(player_status === 3){
        return <div>Match Draw!!!</div>
    }
    return <div>{`player ${player} turn `}</div>
}

const Header = ({player,player_status,winner}) => {
  return (
    <div className = "panel header">
        <div className = "header-text">
            {status(player,player_status,winner)}
        </div>
    </div>
  )
}

export default Header;