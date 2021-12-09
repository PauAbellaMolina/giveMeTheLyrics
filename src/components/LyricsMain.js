import React, { useState, useEffect } from 'react'
import '../App.css'

/* RECEIVES VIA PROPS THE ARTIST AND SONG INPUTED BY THE USER */
function LyricsMain(props) {

    const [fetched, setFetched] = useState(false)
    const [response, setResponse] = useState("")

    /* API CALL FUNCTION */
    // async function fetchData() {
    //     const res = await fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.song}`)
    //     res
    //     .json()
    //     .then(res => setResponse(res))
    //     .then(setFetched(true))
    // }

    /* WHEN COMPONENT MOUNTS -> CALLS THE API */
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.song}`)
            res
            .json()
            .then(res => setResponse(res))
            .then(setFetched(true))
        }

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
