import './Header.css'

import CompanyPic from '../../assets/img/Untitled_Artwork 7 1.png'
import Logo from '../../assets/icon/logo-firm.png'
import NavBar from '../NavBar/NavBar'

import { Button } from 'react-bootstrap'

export default function Header() {
    return (
        <header className='header-page'>
            <article className='header-nav'>
                <a href=""><img src={Logo} alt="Logo" /></a>
                <NavBar />
            </article>
            <article className='header-body'>
                <h1>We Create <br />Startups.</h1>
                <p>We are startup studio that develops and launches new companies.</p>
                <Button variant="primary">
                    <h5>See our works</h5>
                </Button>
            </article>
            <img src={CompanyPic} alt="Company-Pic" />
        </header>
    )
}