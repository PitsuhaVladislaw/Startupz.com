import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Cards = (props) => {

    const cardStyle = {
        color: props.color
    }

    return(
        <Card>
            <Card.Body>
                <Card.Title style={cardStyle}>{props.name}</Card.Title>
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