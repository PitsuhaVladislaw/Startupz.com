import './Who.css'

import Question from '../../assets/icon/question.png'

export default function Who() {
    return(
        <section className='who'>
            <article className='form-desc'>
                <h1>Who we are</h1>
                <p>
                    We create products that have innovation and technology at their core. <br />
                    We value working with talented people that understand the possibilities of today.
                </p>
            </article>
            <article className='form-defeni'>
                <div>
                    <h4>01</h4>
                    <div className='line'></div>
                    <p>
                        We develop innovative <br />
                        products, systems and <br />
                        services
                    </p>
                </div>
                <div style={{marginLeft: '15px'}}>
                    <h4>02</h4>
                    <div className='line'></div>
                    <p>
                        Next we build teams <br />
                        to scale them into <br />
                        companies
                    </p>
                </div>
                <div>
                    <h4>03</h4> 
                    <div className='line'></div>
                    <p>
                        Each startup solving <br /> 
                        one problem <br />
                        at a time
                    </p>
                </div>
            </article>
            <img src={Question} alt="darling" />
        </section>
    )
}