import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Cards = (props) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Card.Img variant="top" src={props.img} />
                <Button variant="primary">{props.but}</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards