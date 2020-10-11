import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (event)=>{
        event.preventDefault(); 
        setIsSubmitting(true); 
        console.log('current data is: ', email, password);
    }

    useEffect(()=>{
        if(!isSubmitting) return; 
        let url = 'https://conduit.productionready.io/api/users/login'; 
        axios(url, {
            method: 'post',
            data: {user: {email, password}
            } 
        }).then(r=> {
            console.log('result is: ', r);
            setIsSubmitting(false); 
        }).catch(e=>{
            console.log('error is: ', e);
            setIsSubmitting(false); 
        })
    });

    return (
    <div className='auth-page'>
        <div className='container page'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 col-xs-12'>
                    <h1 className='text-xs-center'>Login</h1>
                    <p className='text-xs-center'>
                        <Link to='register'>Need an account?</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <fieldset className='form-group'>
                                <input type='email' className='form-control form control-lg'
                                 placeholder='Email address' value={email}
                                 onChange={e=>setEmail(e.target.value)}
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
                            disabled={isSubmitting}
                             >
                                Sign in
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