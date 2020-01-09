import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ card,onClick,isFlipped }) => {
    return (
        <Flippy
            isFlipped={isFlipped}
            flipDirection="horizontal"
            style={{ width: '23%', height: '200px',margin:'5px',float:'left'}} /// these are optional style, it is not necessary
        >

            <FrontSide
            style={{
                backgroundColor: '#175852', fontSize: '80px',textAlign: 'center', lineHeight: '11px'
            }} onClick={onClick}
            >
            ?
            </FrontSide>
            <BackSide
            style={{ backgroundColor: '#175852', fontSize: '80px',textAlign: 'center', lineHeight: '11px'}}>
            {card.data}
            </BackSide>
        </Flippy>
    )
}

export default Card