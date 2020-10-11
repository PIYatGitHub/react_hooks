
import React, { useEffect, useState, useContext } from 'react'; 
import { Link, Redirect } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import {CurrentUserContext} from '../../contexts/currentUser';

const Authentication = (props) => {
    const isLogin = props.match.path === '/login';
    const pageTitle = isLogin? 'Sign in': 'Sign up';
    const descriptionLink = isLogin? '/register': '/login';
    const descriptionText = isLogin? 'Need an account?': 'Have an account?';
    const apiEndpoint = isLogin? '/users/login': '/users';
    const [username, setUsername] = useState('onesystemuser1');
    const [email, setEmail] = useState('onesystemuser1@test.io');
    const [password, setPassword] = useState('123456789');
    const [{response, isLoading, error}, doFetch] = useFetch(apiEndpoint);
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [token, setToken] = useLocalStorage('token');
    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext); 

    const handleSubmit = (event)=>{
        event.preventDefault(); 
        const user = isLogin? {email, password}:{email, password, username};
        doFetch({
            method: 'post',
            data: {user}
        });
        if(error) console.log('error is: ', error); 
        if(token) console.log('token is: ', token); 
        if(currentUserState) console.log('currentUserState is: ', currentUserState); 
    }

    useEffect(()=>{
        if(!response) return;
        setToken(response.user.token);
        setIsSuccessfullSubmit(true); 
        setCurrentUserState(state=>({
            ...state,
            isLoggedIn:true, 
            isLoading: false,
            currentUser: response.user
        }))
    }, [response, setToken, setCurrentUserState]); 

    if(isSuccessfullSubmit) {
        return <Redirect to='/' />
    }

    return (
    <div className='auth-page'>
        <div className='container page'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 col-xs-12'>
                    <h1 className='text-xs-center'>{pageTitle}</h1>
                    <p className='text-xs-center'>
                        <Link to={descriptionLink}>{descriptionText}</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            {!isLogin? (
                                  <fieldset className='form-group'>
                                  <input type='text' className='form-control form control-lg'
                                   placeholder='Username' value={username}
                                   onChange={e=>setUsername(e.target.value.toLowerCase())}
                                   />
                              </fieldset>
                            ): null}
                            <fieldset className='form-group'>
                                <input type='email' className='form-control form control-lg'
                                 placeholder='Email address' value={email}
                                 onChange={e=>setEmail(e.target.value.toLowerCase())}
                                 />
                            </fieldset>
                            <fieldset className='form-group'>
                                <input type='password' className='form-control form control-lg'
                                 placeholder='Password'
                                 value={password}
                                 onChange={e=>setPassword(e.target.value)}
                                  />
                            </fieldset>
                            <button className='btn btn-lg btn-primary pull-xs-right'
                             type='submit'
                            disabled={isLoading}
                             >
                                {pageTitle}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        Authentication here!
    </div>
    );
}

export default Authentication;