import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Col, Row } from 'react-bootstrap';

import GifCard from './GifCard';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash center'>Loading...</p>}

            <Row xs={1} md={2} lg={3} className="g-4">
                {images.map((img) => [
                    <Col key={img}>
                        <GifCard
                            {...img}
                        />
                    </Col>
                ])}
            </Row>
        </>
    );
}

export default GifGrid;