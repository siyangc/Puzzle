import React from 'react'

export default function square(props) {

    const squareStyle = {
        background: props.value? '#66ccff':'#fff',
        border: '2px solid #999',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '107px'
    }

    return (
        <div style={squareStyle} onClick={props.onClick}>
            {props.value}
        </div>
    )
}



