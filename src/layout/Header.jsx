import  React  from "react"
import Logo from "../components/Logo"
import { Link,withRouter } from 'react-router-dom'

const Header = ({ logedIn, setUser,history,user }) => {

    if(logedIn){
        return(
            <header>

                <nav>
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                    <Link to={`/profile/${user.user_id}`}>{user.username}</Link>
                    <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Одјави се</button></Link>
                    <Link to='/memory-game'><button className='header-btn'>Игре меморије</button></Link>
                    </div>
                </nav>
                
            </header>
        )
    }
    else {
        return (
            <header className='header'>
                <nav>
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                    <Link to='/register'><button className='header-btn'>Регистрација</button></Link>
                    <Link to='/login'><button className='header-btn'>Пријави се</button></Link>
                    </div>
                </nav>
                
                
            </header>
        )
    }
}

export default withRouter(Header)
