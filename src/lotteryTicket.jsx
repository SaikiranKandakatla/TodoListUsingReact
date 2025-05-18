import {useState} from "react";
import {RandomThreeDigitNumber,sum} from "./helper"
import "./LotteryTicket.css"
export default function  Lottery(){
    const [number, setNumber] = useState(RandomThreeDigitNumber(3));
    const isWinner=sum(number)===15
    
    let generate=()=>{
        setNumber(RandomThreeDigitNumber(3))
    }

    return(
        <>
        <h1>Lottery</h1>
        <p className="Lottery">Lottery ticket=
            <span>{number[0]}</span>
            <span>{number[1]}</span>
            <span>{number[2]}</span>
        </p>
        <button className="btn btn-outline-secondary" onClick={generate}>Generate new Ticket</button>
        {isWinner?<div className="margin-top:-30px;">Congatulations,you won</div>:null}
        </>
    )
}