import {Link}  from 'react-router-dom' 
import '../../assets/styles/Navbar.css'


function Navbar() {
    return ( 
        <nav className='dropdownmenu'>
            <ul>
                <li><a><Link to="/Calculator">Calculadora</Link></a></li>
                <li><a><Link to="/Quizz">Quizz</Link></a></li>
            </ul>
        </nav>
     );
}

export default Navbar;