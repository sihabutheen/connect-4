import { noofcir ,win ,playone, playtwo} from "./const";
export const iswinner = (gameboard,id,player) =>{

    gameboard[id]=player;
    for(let i=0;i<win.length ;i++)
    {
        const [a,b,c,d] = win[i];

        if(gameboard[a] > 0 && gameboard[a] === gameboard[b] && gameboard[b] ===gameboard[c] && gameboard[c] === gameboard[d] )
        {
            return true;
        }
    }
    return false;
}
export const isdraw = (gameboard,id ,player) => {

    gameboard[id]=player;
    if(iswinner(gameboard,id ,player))
    {
        return false;
    }
    for(let i =0 ;i<noofcir ;i++)
    {
        if(gameboard[i]===0)
        return false;
    }

    return true;
}
export const pleaseSug = (gameboard)=>{

     const board =[];

     for(let i=0;i<noofcir;i++)
     {
        if(gameboard[i] === 0)
        {
            board.push(i);
        }
     }
     const rand = Math.floor(Math.random() * board.length);


     return board[rand];

     

}

const remaining = (gameboard,play) =>{

    let playcount = 0;
    let line =-1;
    for(let i=0;i<win.length;i++)
    {
        let count_1=0;

        const rows = [...win[i]];

        for(let j=0;j<4;j++){

            if(gameboard[rows[j]] === play)
            {
              count_1++;
            }
            else if(gameboard[rows[j]]===0)
            {

            }
            else{
                count_1=0;
            }
                    
        }
        playcount = ( playcount < count_1 ? playcount : count_1);
        line = ( playcount < count_1 ?  i : line);

    }

}


export const computer = (gameboard , currentPlayer ) =>{
    
    const anotherPlayer = (currentPlayer === playone ? playtwo : playone);
     
    remaining(gameboard,currentPlayer,anotherPlayer)
    return pleaseSug(gameboard);
    
}