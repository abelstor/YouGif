import React from 'react';
import { Card } from 'react-bootstrap';

const GifCard = ({ id, title, url }) => {
    return (
        <Card
            border="primary"
            style={{ width: '20rem' }}
            className="container mb-4 animate__animated animate__fadeIn">
            <Card.Img variant="top" src={url} alt="img-gif" className="mt-4" />
            <Card.Body>
                <Card.Title className='text'>{title}</Card.Title>
                <Card.Text>
                    {/* {id} */}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GifCard;