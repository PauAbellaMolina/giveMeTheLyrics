import React from 'react'
import '../App.css'

function HeaderDesktop(props) {
  return (
    <div className="HeaderDesktop">
        <p className="redFnt">{props.title}</p>
    </div>
  )
}

export default HeaderDesktop
