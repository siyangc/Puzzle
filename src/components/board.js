import React from 'react'
import Square from './square'

export default function board(props) {

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        border: '2px solid #999',
        width: '337px',
        height: '337px',
        margin: 'auto',
        boxSizing: 'border-box'
    }
    const position = [0,1,2,3,4,5,6,7,8]
    return (
        <div style={boardStyle}>
            {position.map((pos)=>(
                <Square key={pos} 
                        value={props.value[pos]}
                        onClick={props.onClick.bind(this,pos)}
                />
            ))}
            
        </div>
    )
}

