import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.div`

    background-color: #9d9d9d;
    min-width: 100vw;
    min-height: 100vh;

`


//NAV BAR

export const Navigacija = styled.nav`
    width: 100%;
    height: 45px;
    background-color: #282828;
    padding-top: 5px;
    padding-bottom: 5px;
`
export const Rute = styled.ul`
    width: auto;
    float: right;
    margin-top: 8px;
`

export const Ruta = styled.li`
    display: inline-block;
    padding: 15px 30px;
    color: white;
    
`
export const StyledLogo = styled.p`
    float: left;
    color: white;
    list-style-type: none; 
    font-family: 'lobster';
    font-size: 30px;
    margin-left: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ff8f00;
`


// LOG IN PAGE

export const Forma = styled.form`
    width: 400px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`

export const Inputi = styled.input`
  display: block;
  width: 350px;
  height: 60px;
  border: none;
  outline: none;
  box-shadow: none;
  background: #ff8f00;
  border-radius: 20px;
  ::-webkit-input-placeholder {
      padding-left: 40px;
  };
  font-size: 20px;
`

// HOME

export const Flipi = styled.span`
    display: inline-block;
    margin: 10px 10px;
`
export const Opis = styled.p`
    color: #420D09;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
`

// BREEDS

export const StyledDivImg = styled.div`
    display: flex;
    width: 850px;
    height: 550px;
    margin-left: 30%;
`

export const StyledImg = styled.img`
    margin-top: 5%;
    margin-left: 75px;
    width: 500px;
    height: 450px;
`
export const StyledBtnPrev = styled.button`
    margin-top: 25%;
    width: 100px;
    height: 60px;
    border: none;
    background: none;
    color: #420D09;
    font-weight: bold;
    font-size: 30px;
`
export const StyledBtnNext = styled.button`
    margin-top: 25%;
    margin-left: 30px;
    width: 100px;
    height: 60px;
    float: right;
    border: none;
    background: none;
    color: #420D09;
    font-weight: bold;
    font-size: 30px;
`

export const StyledDivText = styled.div`
    display: flex;
    width: 850px;
    height: 150px;
    margin-left: 30%;
`

export const StyledBreed = styled.span`
    width: 250px;
    border-right: 2px solid blanchedalmond;
    text-align: center;
    color: #420D09;
    font-weight: bold;
    font-size: 25px;
`
export const StyledTemperament = styled.span`
    text-align: center;
    border-right: 2px solid blanchedalmond;
    width: 400px;
    color: #420D09;
    font-weight: bold;
    font-size: 25px;
`
export const StyledLifeSpan = styled.span`
    text-align: center;
    width: 250px;
    color: #420D09;
    font-weight: bold;
    font-size: 25px;
`

// SEARCH

export const StyledInputSearch = styled.input`
    margin-left: 5%;
    margin-top: 5%;
    width: 350px;
    height: 70px;
    border: none;
    outline: none;
    box-shadow: none;
    background: #ff8f00;
    border-radius: 20px;
  ::-webkit-input-placeholder {
    padding-left: 20px;
  };
    font-size: 25px;
    
`