import React, { useState, useEffect } from 'react'
import '../App.css'

/* RECEIVES VIA PROPS THE ARTIST AND SONG INPUTED BY THE USER */
function LyricsMain(props) {

    const [fetched, setFetched] = useState(false)
    const [response, setResponse] = useState("")

    /* API CALL FUNCTION */
    const fetchData = async () => {
        const res = await fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.song}`)
        res
        .json()
        .then(res => setResponse(res))
        .then(setFetched(true))
    }

    /* WHEN COMPONENT MOUNTS -> CALLS THE API */
    useEffect(() => {
<<<<<<< HEAD
=======
        async function fetchData() {
            const res = await fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.song}`)
            res
            .json()
            .then(res => setResponse(res))
            .then(setFetched(true))
        }

>>>>>>> a1528bfe141a9a8265ada1f3409b257a8fca4cf8
        fetchData();
    }, [])
    
    let values = Object.values(response)

    /* IF LOADED (fetched) -> RENDER THE API RESPONSE // IF NOT LOADED YET (!fetched) -> RENDER LOADING DOTS  */
    if (fetched) { 
        return (
            <div className="lyricsComponent">
                {values[0]}
            </div>
        )
    } else { 
        return (
            <div className="fetching">
                ···
            </div>
        )
    }

    
}

export default LyricsMain
