import React, { useEffect, useState } from 'react'
import { getAll, getBreeds } from './source.js'
import { StyledDivImg, StyledImg, StyledDivText, StyledBreed, StyledLifeSpan, StyledTemperament, StyledInputSearch } from './style.js'

export const Search = ({ filter, setFilter, breed, setBreed }) => {

    const [rasa, setRasa] = useState([]);

    useEffect(() => {
        getAll().then(res => {
            setRasa(res.data)
        })

    }, [])

    const prikaziSliku = (el, breed, setBreed) => {

        getBreeds(el.id).then(res => {
            setBreed(res.data[0].url)
        })

        return (
            <>
                {breed === undefined ? <p>Loading...</p> : <StyledImg src={breed} alt='slika' />}
            </>
        )
    }

    const Pretraga = (rasa, filter, breed, setBreed) => {

        let niz = rasa.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
        return (
            niz.map(el => {
                return (
                    <>
                        {niz.length === 1 ?
                            <StyledDivImg>
                                {prikaziSliku(el, breed, setBreed)}
                            </StyledDivImg> : ''}
                        <StyledDivText>

                            <StyledBreed key={Math.max()}>
                                <p>Breed:</p>
                                <br />
                                <p>{el.name}</p>
                            </StyledBreed>

                            <StyledTemperament key={Math.max()}>
                                <p>Temperament:</p>
                                <br />
                                <p>{el.temperament}</p>
                            </StyledTemperament>

                            <StyledLifeSpan key={Math.max()}>
                                <p>Life span:</p>
                                <br />
                                <p>{el.life_span}</p>
                            </StyledLifeSpan>

                        </StyledDivText>
                    </>
                )
            })
        )

    }

    return (
        <>
            <StyledInputSearch placeholder='Search...' onChange={(e) => setFilter(e.target.value)} />
            {Pretraga(rasa, filter, breed, setBreed)}
        </>
    )
}