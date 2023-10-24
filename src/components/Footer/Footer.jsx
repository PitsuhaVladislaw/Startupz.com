import './Footer.css'

import Logo from '../../assets/icon/logo-firm.png'

import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
    return(
        <footer className='footer-page'>
            <article className='desc-logo'>
                <img src={Logo} alt="Logo company" />
                <h5>© 2020 Startupz.<br />All rights reserved. </h5>
            </article>
            <section>
                <article>
                    <h3>Companies</h3>
                    <div style={{ gap: '0' }}>
                        <a href="none">
                            <h5>Tolq</h5>
                        </a>
                        <a href="none">
                            <h5>LegalSite</h5>
                        </a>
                        <a href="none">
                            <h5>Codekeeper</h5>
                        </a>
                        <a href="none">
                            <h5>Feedback Labs</h5>
                        </a>
                    </div>
                </article>
                <article style={{margin: '0 90px 0 155px'}}>
                    <h3>Contact</h3>
                    <div>
                        <p>
                            World Trade Center - The Hague <br />
                            Prinses Margrietplantsoen 33 <br />
                            2595 AM The Hague <br />
                            The Netherlands <br />
                        </p>
                        <a href="none">
                            <h5>Send us an email</h5>
                        </a>
                    </div>
                </article>
                <article style={{ gap: '20px' }}>
                    <h3>Follow us</h3>
                    <div style={{ gap: '15px' }}>
                        <a href="none">
                            <AiOutlineTwitter className='icon-link' />
                        </a>
                        <a href="none">
                            <AiFillLinkedin className='icon-link' />
                        </a>
                        <a href="none">
                            <AiOutlineInstagram className='icon-link' />
                        </a>
                    </div>
                </article>
            </section>
        </footer>
    )
}