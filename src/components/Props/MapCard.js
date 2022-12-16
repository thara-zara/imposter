import React from 'react'
import "./MapCard.css";

function MapCard (props) {
  return (
    <div className={props.card}>
        <div className={props.body}>
            <h2 className={props.hed}>{props.head}</h2>
            <h1>{props.name}</h1>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default MapCard;