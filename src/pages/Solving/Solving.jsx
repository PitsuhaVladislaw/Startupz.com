import './Solving.css'

import LikeLeft from '../../assets/img/leftlike.png'
import LikeRight from '../../assets/img/rightlike.png'

export default function Solving() {
    return(
        <section className='solving'>
            <img src={LikeLeft} alt="like" />
            <h5>We love solving problems!</h5>
            <img src={LikeRight} alt="like" />
        </section>
    )
}