import React from 'react'
import "./PcsCard.css"

function PcsCard (props) {
  return (
    <div className={props.color_class}>
        <img src={props.img_name} alt="img" className={props.img}/>
        <div className={props.header}>
            <h1>{props.head}</h1>
            <p>{props.content}</p>
        </div>
        <div className={props.skew}></div>
    </div>
  )
}

export default PcsCard;