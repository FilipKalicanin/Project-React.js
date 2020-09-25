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
    width: 255px;
    height: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`

export const Inputi = styled.input`
  display: block;
  width: 250px;
  height: 30px;
  border: none;
  outline: none;
  box-shadow: none;
  background: #ff8f00;
  border-radius: 10px;
  ::-webkit-input-placeholder {
      padding-left: 20px;
  };
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
    width: 600px;
    height: 400px;
    margin-left: 25%;
   
`

export const StyledImg = styled.img`
    margin-top: 5%;
    margin-left: 20px;
    width: 400px;
    height: 350px;
`
export const StyledBtnPrev = styled.button`
    margin-top: 25%;
    width: 80px;
    height: 40px;
    border: none;
    background: none;
    color: #420D09;
    font-weight: bold;
    font-size: 20px;
`
export const StyledBtnNext = styled.button`
    margin-top: 25%;
    margin-left: 20px;
    width: 80px;
    height: 40px;
    float: right;
    border: none;
    background: none;
    color: #420D09;
    font-weight: bold;
    font-size: 20px;
`

export const StyledDivText = styled.div`
    display: flex;
    width: 600px;
    height: 100px;
    margin-left: 25%;
`

export const StyledBreed = styled.span`
    width: 150px;
    border-right: 2px solid blanchedalmond;
    text-align: center;
    color: #420D09;
    font-weight: bold;
`
export const StyledTemperament = styled.span`
    text-align: center;
    border-right: 2px solid blanchedalmond;
    width: 300px;
    color: #420D09;
    font-weight: bold;
`
export const StyledLifeSpan = styled.span`
    text-align: center;
    width: 150px;
    color: #420D09;
    font-weight: bold;
`

// SEARCH

export const StyledInputSearch = styled.input`
    margin-left: 5%;
    margin-top: 5%;
    width: 250px;
    height: 30px;
    border: none;
    outline: none;
    box-shadow: none;
    background: #ff8f00;
    border-radius: 10px;
  ::-webkit-input-placeholder {
    padding-left: 20px;
  };
    
    
`