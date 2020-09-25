import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Forma, Inputi } from './style'

export const LogIn = ({ setUser }) => {

    //Set-up Log-in stranice i koriscenje useHistory kako bi se nakon klika Log-In redirektovao na HOME

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    return (
        <>
            <Forma onSubmit={(e) => {
                e.preventDefault()
                if (users.some(el => el.username === username && el.password === password)) {

                    setUser(users)
                    history.push('/home')

                } else {
                    window.alert('Pogresan unos.')
                }
            }}>
                <Inputi type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <br />
                <Inputi type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <br />
                <Inputi type='submit' value='Dog-In' />
            </Forma>
        </>
    )

}
const users = [
    {
        username: 'dogs',
        password: 'house'
    }
]