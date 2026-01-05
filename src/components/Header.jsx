import React from 'react'
import { Link } from 'react-router-dom'
import RandomGame from './RandomGame'

const Header = () => {
    return (
        <header>

            <RandomGame/>

            <Link to='/'>
                <h1>XL
                    <span>g</span>
                    amin
                    <span>g</span>
                    4Free
                </h1>
            </Link>


            <Link to='/about'>About me</Link>

        </header>
    )
}

export default Header