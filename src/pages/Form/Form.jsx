import './Form.css'

import Rocket from '../../assets/img/Subtract.png'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Forms() {
    return(
        <section className='form-sect'>
            <h1>
                Are you ready <br />
                to board this rocket ship?
            </h1>
            <p>Share your excitement with us.</p>
            <Form>
                <FormGroup>
                    <FormControl type="text" placeholder="Name*" />
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Email*" />
                </FormGroup>
                <FormGroup>
                    <FormControl as="textarea" rows={3} placeholder="Message*" />
                </FormGroup>
                <Button variant="primary" type="submit">Отправить</Button>
            </Form>
            <img src={Rocket} alt="rocket" />
        </section>
    )
}