import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <div className='navbar'>
            <h2 className='app-logo'>WOOKIE MOVIES</h2>
            <div className='search__bar'>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Navbar
