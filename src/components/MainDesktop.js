import React from 'react'
import '../App.css'

    // const [loaded, setLoaded] = useState(false)
    // const [response, setResponse] = useState("")

function NotLoaded() {
    return(
        <div className="MainDesktop">
            <form>
                <input type="text" name="artistInput" value="" placeholder="ARTIST" />
                <input type="text" name="artistInput" value="" placeholder="ARTIST" />
                <button>Go!</button>
            </form>
        </div>
    )
}

function ComponentHandler() {
    return(
        <NotLoaded />
    )
}

function MainDesktop() {
  return (
    <ComponentHandler />
  )
}

export default MainDesktop