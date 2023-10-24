import './Hiring.css'

import RightPic from '../../assets/img/Untitled_Artwork 5.png'
import LeftPic from '../../assets/img/Untitled_Artwork 6.png'

export default function Hiring() {
    return(
        <section className='hiring'>
            <img src={LeftPic} className='leftpic' alt="leftpic" />
            <h2>We are hiring!</h2>
            <p>We're always looking for talented people to <br />join and help build our startups.
                <br />Check out our current openings</p>
            <button>
                <h5>See current openings </h5>
            </button>
            <img src={RightPic} className='rightpic' alt="rightpic" />
        </section>
    )
}