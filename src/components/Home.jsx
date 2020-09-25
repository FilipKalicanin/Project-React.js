import React, { useEffect } from 'react'
import { getAll } from './source.js'
import Dog from './Dog.jsx';


export const Home = ({ dogs, setDogs }) => {

    useEffect(() => {

        let mounted = true;

        // Pristup podacima sa servera koje kasnije koristimo prilikom unosa podataka u Flippy (Dog.jsx)
        getAll().then(res => {
            if (mounted) {
                setDogs(res.data)
            }
        })
        return () => { mounted = false }
        // eslint-disable-next-line
    }, [])



    return (

        dogs.map(el => {
            return (
                <Dog key={el.id} dog={el} />
            )
        })

    )

}