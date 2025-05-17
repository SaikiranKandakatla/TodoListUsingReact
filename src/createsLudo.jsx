import { useState } from "react";

export default function Ludo(){
    //by using objects
    const [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0});
    const [arr,setArr]=useState(["noMoves"]);
    let updateBlue =()=>{
        setMoves((prevValue)=>(
            {...prevValue,blue:prevValue.blue+=1}
        ))

        // arr.push("blue");
        setArr([...arr,"blue"])
        console.log(arr)
    }
    let updateYellow =()=>{
        setMoves((prevValue)=>(
            {...prevValue,yellow:prevValue.yellow+=1}
        ))
    }
    let updateRed =()=>{
        setMoves((prevValue)=>(
            {...prevValue,red:prevValue.red+=1}
        ))
    }
    let updateGreen =()=>{
        setMoves((prevValue)=>(
            {...prevValue,green:prevValue.green+=1}
        ))
    }
    return (
        <>
            {/*  //without spreading it will not take any reference so it will not save unless we spread it */}
            {arr}
            <div className="board">
                <p>BlueMoves={moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
            
                <p>Yellow={moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            
                <p>red={moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            
                <p>Green={moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
            </div>
        
        </>
    );
}