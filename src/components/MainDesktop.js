import React, { useState, useEffect } from 'react'
import HeaderDesktop from './HeaderDesktop'
import LyricsMainDesktop from './LyricsMainDesktop'
import '../App.css'

function ComponentHandler() {
    const [title, setTitle] = useState("")
    const [loaded, setLoaded] = useState(true)
    const [response, setResponse] = useState("")

    ///CREATE FUNCTION THAT WHEN SUBMIT (SEE BELOW) DOES A USEFFECT AND CALLS THE API AND UPDATES THE STATES ABOVE (https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd)

    function NotLoaded() {
        return(
            <div className="MainDesktop">
                <HeaderDesktop title="GIVEMETHELYRICS" />
                <form> {/*ADD ONSUBMIT CALL FUNCTION THAT CALLS THE API*/}
                    <input type="text" name="artistInput" value="" placeholder="ARTIST" />
                    <input type="text" name="artistInput" value="" placeholder="ARTIST" />
                    <button>GO!</button>
                </form>
            </div>
        )
    }
    
    function ResponseLoaded() {
        setTitle("LEVEL OF CONCER") ///SET THE TITLE TO WHATEVER TITLE WE RECEIVE FROM THE API
        let lyrics = `Need you, tell me

        Need you, tell me
        
        
        Panic on the brain, world has gone insane
        
        Things are starting to get heavy, mm
        
        I can't help but think I haven't felt this way
        
        
        Since I asked you to go steady
        
        
        
        
        Wonderin' would you be my little quarantine?
        
        
        Or is this the way it ends?
        
        
        
        
        'Cause I told you my level of concern
        
        
        But you walked by like you never heard
        
        
        And you could bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay
        
        
        
        
        Panic on the brain, Michael's gone insane
        
        
        Julie starts to make me nervous
        
        
        I don't really care what they would say
        
        
        I'm asking you to stay
        
        
        In my bunker underneath the surface
        
        
        
        
        Wonderin' would you be my little quarantine? (Quarantine)
        
        
        Or is this the way it ends?
        
        
        
        
        'Cause I told you my level of concern
        
        
        But you walked by like you never heard
        
        
        And you could bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay, yeah
        
        
        
        
        Tell me we're alright, tell me we're okay, yeah
        
        
        Tell me we're alright, tell me we're okay
        
        
        Bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay, yeah
        
        
        
        
        'Cause I told you my level of concern
        
        
        But you walked by like you never heard
        
        
        And you could bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay
        
        
        I need you to tell me we're alright, tell me we're okay
        
        
        I need you to tell me we're alright, tell me we're okay
        
        
        I need you to tell me we're alright, tell me we're okay
        
        
        I need you to tell me we're alright, tell me we're okay
        
        
        Need you now
        
        
        I need you now
        
        
        
        
        'Cause I told you my level of concern
        
        
        But you walked by like you never heard
        
        
        And you could bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay, yeah
        
        
        
        
        Tell me we're alright, tell me we're okay, yeah
        
        
        Tell me we're alright, tell me we're okay
        
        
        You could bring down my level of concern
        
        
        Just need you to tell me we're alright
        
        
        Tell me we're okay, yeah
        
        
        
        
        In a world where you could just lie to me (I need you)
        
        
        And I'd be okay, we'll be okay (Level of concern)
        
        
        We're gonna be okay (Just need you to tell me we're alright)
        
        
        Tell me we're okay, I need you
        
        
        Need you, yeah
        
        
        Need you, yeah`


        return(
            <div className="MainDesktop">
                <HeaderDesktop title={title} />
                <LyricsMainDesktop lyrics={lyrics} />
                <button>GOBACK</button>
            </div>
        )
    }

    if (loaded) { 
        return <ResponseLoaded /> 
    }
    else { 
        return <NotLoaded /> 
    }
}

function MainDesktop() {
  return(
    <ComponentHandler />
  )
}

export default MainDesktop