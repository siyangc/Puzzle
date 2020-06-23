import React from 'react'

export default function menu(props) {

    const menuStyle = {
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '300px'      
    }

    const messageStyle = {
        marginTop: '10px',
        textAlign: 'Center'
    }
    return (
        <div>                    
            <div style={menuStyle}>
                <button onClick={props.onClickRetry}>
                    Retry
                </button>
                <button onClick={props.onClickCheat}>
                    Cheat
                </button>
            </div>
            <div style={messageStyle}>
                {props.message}
            </div>  
        </div>
    )
}
