import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { getMemoryCards, addScore, calculateScore } from '../util/coetus-service';

const MemoryGame = ({user}) => {
    
    const [cards, setCards] = useState([])
    const [time,setTime] = useState(0)
    const [selected, setSelected] = useState([])
    const [correct, setCorrect] = useState([])
    
    useEffect(() => {
        let tm = setTimeout(() => {
            setTime(time + 1)
        },1000)
        if(correct.length === cards.length && correct.length !== 0){
            clearTimeout(tm);
            addScore({
                "user_id":user.user_id,
                "score": calculateScore(time),
                "game_id": 0
            })
        }
    },[time,cards.length,correct.length,user.user_id])
        
    useEffect(() => {
    getMemoryCards()
    .then(data => {
        const copy = [...data.data,...data.data]
        setCards(shuffleArray(copy))
    })},[])
    
    function shuffleArray(cards){
        let tmp = [...cards]
        return tmp.sort(() => 0.5 - Math.random())
    }

    

    const onCardClick = (index) => {
        console.log(index)
        if(selected.length === 0){
            setSelected([index])
        }
        else if(selected.length === 1){
            if(cards[selected[0]].data === cards[index].data){
                console.log("NASAO ISTE")
                setCorrect(correct.concat(selected[0],index))
                setSelected([])
            }
            else{
                console.log("NAPRAVIO TAJMAUT")
                setSelected([selected[0],index])
                setTimeout(() => {
                    setSelected([])
                },850)
            }
        }
    }

   

    return (
        <div>
            <p>{time}</p>
            {cards.map((card,index) => {
                return <Card 
                        key={index} 
                        isFlipped={correct.includes(index) || selected.includes(index)} 
                        card={card} 
                        onClick={() => onCardClick(index)} 
                        />
            })}
        </div>
    )

}

export default MemoryGame 

