import  React  from "react"
import Logo from "../components/Logo"

const Footer = (props) => {
    return (
        <footer className='footer'>
            <p className="company-desc">
                Најјача компанија на свету
            </p>
            <p>&copy; Ја</p>
            <Logo />
        </footer>
    )
}

export default Footer