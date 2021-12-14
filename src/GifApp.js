import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {

    const [categories, setCategories] = useState(['Facepalm']);

    return (
        <>
            <Container>
                <h2 className='center'>YouGif</h2>
                <AddCategory setCategories={setCategories} />
                <hr />
                {categories.map((category) => [
                    <GifGrid
                        key={category}
                        category={category} />
                ])}
            </Container>
        </>
    );
}

export default GifApp;