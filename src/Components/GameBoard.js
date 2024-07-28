import React,{useState} from "react";
import GameCircle from "./GameCircle";
import '../Game.css'
import Header from "./Header";
import Footer from "./Footer";
import {iswinner,isdraw,computer} from './helper'
import { noplay,playone ,playtwo,
  
    noofcir,
    player_wins,
    player_playing,
    player_draw 
} from './const';

const GameBoard = () => {

    
    const [gameCol,setgameCol] = useState(Array(16).fill(noplay));
    const [player,setplayer]   = useState(playone);
    const [player_status,setplayer_status]=useState(player_playing);
    const [wins,setwins] =useState(noplay);


    const initGame= () =>{
        setgameCol(Array(16).fill(noplay));
        setplayer(playone);
        setplayer_status(player_playing);
        setwins(noplay);
    }
    const initboard = () =>{
        const circles =[];
        for(let i=0;i<noofcir;i++)
        {
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const comSug = () => {
        cirClicked(computer(gameCol,player));
    }


    const cirClicked = (id) => {
    
        if(wins !== noplay || player_status===player_wins || gameCol[id]!==0 )
        {
            return;
        }
        if(iswinner(gameCol,id ,player))
        {
            setplayer_status(player_wins);
            setwins(player);
        }
        if(isdraw(gameCol,id ,player))
        {
            setplayer_status(player_draw);
        }
        setgameCol(prev =>{
            return(prev.map((circle,pos)=>{
                if(pos===id) return player;
                return circle
            }))
        })

        setplayer(player === 1 ? playtwo : playone);

    }
  
    const renderCircle = id => {

        return <GameCircle key={id} id={id} className={`player-${gameCol[id]}`} onCirClicked={cirClicked} /> 
    }

    return (
        <>
            <Header player={player} player_status={player_status} winner={wins}/>
            <div className="gameboard">
                {initboard()}
             </div>
           <Footer reset={initGame} computer={comSug} player_status={player_status}/>
        </>
    )
}
export default GameBoard;