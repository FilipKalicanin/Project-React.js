import React, { useState } from 'react'
import { useEffect } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { getImageById } from './source'
import { Flipi, Opis } from './style';
import { LoadingPage } from './LoadingPage.jsx'


const Dog = ({ dog }) => {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)

    // Postava Loading-a
    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    }, [])

    // Uvoz podataka sa API
    useEffect(() => {

        let mounted = true;

        // Koriscenje Axios.get funkcije za pristup podacima sa servera
        getImageById(dog.id).then(res => {
            if (mounted) {
                setImage(res.data[0].url)
            }
        })

        return () => { mounted = false }
        // eslint-disable-next-line
    }, [])

    return (
        <Flipi>
            {/* Postava Loading slike pre prikaza ucitanih podataka */}
            {loading === false ?
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    style={{ width: '290px', height: '290px' }}
                    key={dog.id}
                >
                    <FrontSide
                        style={{ backgroundColor: '#9d9d9d', }}>
                        {<img src={image} alt='slika' style={{ width: '260px', height: '250px' }} />}
                    </FrontSide>
                    <BackSide
                        style={{ backgroundColor: '#9d9d9d' }}>
                        <Opis>Breed: {dog.name}</Opis>
                        <Opis>Life span: {dog.life_span}</Opis>
                    </BackSide>
                </Flippy>
                : <LoadingPage />}
        </Flipi>
    )
}

export default Dog