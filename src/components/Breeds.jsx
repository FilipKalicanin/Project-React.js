import React, { useEffect, useState } from 'react'
import { getBreeds } from './source.js'
import { StyledDivImg, StyledBtnPrev, StyledBtnNext, StyledImg, StyledDivText, StyledBreed, StyledLifeSpan, StyledTemperament } from './style.js'

export const Breeds = ({ breed, setBreed, opis, setOpis }) => {

    // Promenljiva ID
    const [id, setId] = useState(1)

    // Uvoz podataka sa API - pristup URL slike
    useEffect(() => {

        getBreeds(id).then(res => {

            res.data.length &&
                setBreed(res.data[0])
        })
        // eslint-disable-next-line
    }, [id])

    // Uvoz podataka sa API - pristup Opisu i Tempremantu
    useEffect(() => {

        getBreeds(id).then(res => {
            res.data[0] &&
                setOpis(res.data[0].breeds[0])
        })
        // eslint-disable-next-line
    }, [id])

    // Promena ID odnosno URL na klik
    const prev = () => {
        setId(id - 1)
    }

    // Promena ID odnosno URL na klik
    const next = () => {
        setId(id + 1)
    }

    return (
        <>

            <StyledDivImg>
                <StyledBtnPrev disabled={id === 1} onClick={prev}>Prev</StyledBtnPrev>
                {breed.url === undefined ? <p>Image unavailable.</p> : <StyledImg src={breed.url} alt='slika' />}
                <StyledBtnNext onClick={next}>Next</StyledBtnNext>
            </StyledDivImg>

            <StyledDivText>

                <StyledBreed>
                    <p>Breed:</p>
                    <br />
                    <p>{opis.name}</p>
                </StyledBreed>

                <StyledTemperament>
                    <p>Temperament:</p>
                    <br />
                    <p>{opis.temperament}</p>
                </StyledTemperament>

                <StyledLifeSpan>
                    <p>Life span:</p>
                    <br />
                    <p>{opis.life_span}</p>
                </StyledLifeSpan>

            </StyledDivText>
        </>
    )
}
