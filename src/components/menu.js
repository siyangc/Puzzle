import React from 'react'

export default function menu(props) {

    const menuStyle = {
        marginTop: '30px'
    }
    return (
        <div style={menuStyle}>
            <button onClick={props.onClickRetry}>
                Retry
            </button>
            <button onClick={props.onClickCheat}>
                Cheat
            </button>
            {props.message}
        </div>
    )
}
