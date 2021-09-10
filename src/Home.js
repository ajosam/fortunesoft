import React from 'react'
import Genre from './Components/Genre/Genre'
import Navbar from './Components/Navbar/Navbar'
import {originals} from './urls'

function Home() {
    return (
        <div>
            <Navbar />
            <Genre url={originals} head='All Movies' />
        </div>
    )
}

export default Home
