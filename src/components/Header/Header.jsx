import './Header.css'

import CompanyPic from '../../assets/img/Untitled_Artwork 7 1.png'
import Logo from '../../assets/icon/logo-firm.png'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <header className='header-page'>
            <article className='header-nav'>
                <img src={Logo} alt="Logo" />
                <NavBar />
            </article>
            <article className='header-body'>
                <h1>We Create <br />Startups.</h1>
                <p>We are startup studio that develops and launches new companies.</p>
                <button>
                    <h5>See our works</h5>
                </button>
            </article>
            <img src={CompanyPic} alt="Company-Pic" />
        </header>
    )
}