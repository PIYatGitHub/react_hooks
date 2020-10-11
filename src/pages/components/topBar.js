import React from 'react'; 
import {Link, NavLink} from 'react-router-dom'; 

const TopBar = () => {
    return (
    <nav className = 'navbar navbar-light'>
     <div className='container'>
        <Link to='/' className='navbar-brand'>Medium Clone</Link>
        <ul className = 'nav navbar-nav pull-xs-right'>
            <li className='nav-item'>
            <NavLink to='/' className='nav-link' exact>Home</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to='/login' className='nav-link'>Login</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to='/register' className='nav-link'>Register</NavLink>
            </li>
        </ul>
     </div> 
    </nav>
    ); 
}

export default TopBar;