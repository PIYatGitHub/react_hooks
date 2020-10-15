import React, { useContext, Fragment } from 'react'; 
import {Link, NavLink} from 'react-router-dom'; 
import { CurrentUserContext } from '../../contexts/currentUser';

const TopBar = () => {
    const [currentUserState] = useContext(CurrentUserContext); 

    return (
    <nav className = 'navbar navbar-light'>
     <div className='container'>
        <Link to='/' className='navbar-brand'>Medium Clone</Link>
        <ul className = 'nav navbar-nav pull-xs-right'>
            <li className='nav-item'>
            <NavLink to='/' className='nav-link' exact>Home</NavLink>
            </li>
            {currentUserState.isLoggedIn === false? (
                <Fragment>
                    <li className='nav-item'>
                    <NavLink to='/login' className='nav-link'>Login</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/register' className='nav-link'>Register</NavLink>
                    </li>
                </Fragment>
            ): null}
             {currentUserState.isLoggedIn === true ? (
                <Fragment>
                    <li className='nav-item'>
                    <NavLink to='/articles/new' className='nav-link'>
                        <i className='ion-compose'></i>
                        &nbsp; New Post
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to={`/profiles/${currentUserState.currentUser.username}`} className='nav-link'>
                       <img alt ='' className = 'user-pic' src = {currentUserState.currentUser.image} />
                       &nbsp; {currentUserState.currentUser.username}                       
                    </NavLink>
                    </li>
                </Fragment>
            ): null}
        </ul>
     </div> 
    </nav>
    ); 
}

export default TopBar;