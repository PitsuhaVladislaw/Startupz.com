import './Form.css'

import Rocket from '../../assets/img/Subtract.png'

export default function Form() {
    return(
        <section className='form-sect'>
            <h1>
                Are you ready <br />
                to board this rocket ship?
            </h1>
            <p>Share your excitement with us.</p>
            <form action="message">
                <input type="text" name="name" id="name" placeholder='Name*' />
                <input type="email" name="email" id="email" placeholder='Email*' />
                <textarea name="mes" id="mes" placeholder='Message*'></textarea>
                <button>
                    <h6>Shoot us a message</h6>
                </button>
            </form>
            <img src={Rocket} alt="rocket" />
        </section>
    )
}