import React, { useState } from 'react';
import { login } from '../util/coetus-service';
import { withRouter } from 'react-router-dom'


const Login = ({setUser,history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(){
        login({email,password})
        .then(data =>  {
            if(data.success) {
                setUser(data.user)
                history.push('/memory-game')
            }
            else console.log('Није улогован')
        })


    }

    return (
        <form>
            <br/><br/><br/>
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }}/> <br/>
            <input type="password" placeholder="Шифра" required onInput={e => {
                setPassword(e.target.value)
            } }/> <br/>
            <input type="submit" value="Улогуј се" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    )
}

export default withRouter(Login)




