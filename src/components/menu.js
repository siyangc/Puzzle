import React from 'react'

export default function menu(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                Retry
            </button>
            {props.message}
        </div>
    )
}
