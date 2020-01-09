import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Highscore from '../components/Highscore';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import MemoryGame from '../games/MemoryGame';

const Content = ({ setUser,user }) => {
    return(
        <main className='main'>
        <Switch>
            <Route exact path='/' component={Highscore} />
            <Route path='/register' component={(props) => <Register setUser={setUser} {...props}/>} />
            <Route path='/login' component={(props) => <Login setUser={setUser} {...props}/>} />
            <Route path='/profile/:user_id' component={Profile} />

            <Route path='/memory-game' component={() => <MemoryGame user={user} />} />
        </Switch>
        </main>
    )
}

export default Content
