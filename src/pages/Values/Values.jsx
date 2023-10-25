import './Values.css'

import Darling from '../../assets/icon/darling.png'

export default function Values() {
    return (
        <section className='values'>
            <h1>Our core values</h1>
            <article>
                <div>
                    <h3>01. Innovation</h3>
                    <div className='line'></div>
                    <p>
                        Startupz operates where entrepreneurship <br />
                        and technology intersect. We design solutions <br />
                        and turn them into businesses models. 
                    </p>
                </div>
                <div>
                    <h3>01. Innovation</h3>
                    <div className='line'></div>
                    <p>
                        Talent is what enable us <br />
                        to create great <br />
                        companies.
                    </p>
                </div>
            </article>
            <img src={Darling} alt="darling" />
        </section>
    )
}