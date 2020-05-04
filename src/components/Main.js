import React, { useState } from 'react'
import Header from './Header'
import LyricsMain from './LyricsMain'
import '../App.css'

    /* MAIN OR LYRICS PAGE HANDLER */
    function ComponentHandler() {
        const [title, setTitle] = useState("GIVEMETHELYRICS")
        const [loaded, setLoaded] = useState(false)
        
        const [artist, setArtist] = useState("")
        const [song, setSong] = useState("")
        
        const [focusA, setFocusA] = useState(false)
        const [focusS, setFocusS] = useState(false)

        /* MAIN PAGE */
        function NotLoaded() {
            /* INPUTS HANDLERS */
            function SetArtistFunc(event) {
                const {value} = event.target
                setArtist(value)
                setFocusA(true)
                setFocusS(false)
            }

            function SetSongFunc(event) {
                const {value} = event.target
                setSong(value)
                setFocusS(true)
                setFocusA(false)
            }

            /* SUBMIT HANDLER */
            function handleSubmit() {
                setArtist(artist)
                setSong(song)
                setTitle(song)
                setLoaded(true)
            }

            /* RETURN OF THE MAIN PAGE */
            return(
                <div className="Main">
                    <Header title={title} />
                    <form method="post" onSubmit={handleSubmit}>
                        <input type="text" pattern="[a-zA-Z0-9-]+" name="artistInput" value={artist} onChange={SetArtistFunc} autoFocus={focusA} placeholder="ARTIST" required />
                        <input type="text" pattern="[a-zA-Z0-9-]+" name="songInput" value={song} onChange={SetSongFunc} autoFocus={focusS} placeholder="SONG" required />
                        <button>GO!</button>
                    </form>
                </div>
            )
        }
        
        /* LYRICS PAGE */
        function ResponseLoaded() {
            function goBack() {
                setTitle("GIVEMETHELYRICS")
                setLoaded(false)
            }

            /* RETURN OF THE LYRICS PAGE COMPONENTS */
            return(
                <div className="Main">
                    <Header title={title} />
                    <LyricsMain artist={artist} song={song} />
                    <button onClick={goBack}>GOBACK</button>
                </div>
            )
        }

        /* MAIN OR LYRICS PAGE RETURN */
        if (loaded) { 
            return <ResponseLoaded /> 
        } else { 
            return <NotLoaded /> 
        }
    }

function Main() {
    return(
        <ComponentHandler />
    )
}

export default Main