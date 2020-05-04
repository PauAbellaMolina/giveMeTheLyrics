import React from 'react'
import '../App.css'

/* RECEIVES VIA PROPS EITHER THE GIVEMETHELYRICS TITLE OR THE SONG TITLE */
function Header(props) {
  return (
    <div className="Header">
        <p className="redFnt">{props.title}</p>
    </div>
  )
}

export default Header
