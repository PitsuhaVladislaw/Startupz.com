import Cards from '../../components/Cards'
import './OurWorks.css'

import Image1 from '../../assets/img/tech 1.png'
import Image2 from '../../assets/img/tech 2.png'
import Image3 from '../../assets/img/tech 3.png'
import Image4 from '../../assets/img/tech 4.png'
import LikeLeft from '../../assets/img/leftlike.png'
import LikeRight from '../../assets/img/rightlike.png'

export default function OurWorks() {
    return(
        <section className='ourworks' id='ourWorks'>
            <h1>Our works</h1>
            <article className='container'>
                <Cards
                    color="#A9BC87"
                    name="Feedback Labs"
                    desc="Feedback Labs turns feedback into actionable insights for your team."
                    img={Image1}
                    but="More"
                />
                <Cards
                    color="#8BB5C9"
                    name="Feedback Labs"
                    desc="Feedback Labs turns feedback into actionable insights for your team."
                    img={Image2}
                    but="More"
                />
                <Cards
                    color="#00A0B6"
                    name="Feedback Labs"
                    desc="Feedback Labs turns feedback into actionable insights for your team."
                    img={Image3}
                    but="More"
                />
                <Cards
                    color="#8B60D3"
                    name="Feedback Labs"
                    desc="Feedback Labs turns feedback into actionable insights for your team."
                    img={Image4}
                    but="More"
                />
            </article>
            <article className='block-infa'>
                <img src={LikeLeft} alt="like" />
                <p>
                    Startups create a world that actually is better <br />
                    Any problem that can be solved, will be solved <br />
                    by a startup, and that is a huge opportunity.
                </p>
                <img src={LikeRight} alt="like" />
            </article>
        </section>
    )
}