import React, { useEffect } from 'react'; 
import useFetch from '../../hooks/useFetch'; 
import Feed from '../components/feed';
const GlobalFeed = () => {
    const apiUrl = '/articles?limit=10&offset=0'; 
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    
    useEffect(()=> {
        doFetch(); 
    }, [doFetch])
    
    
    return (
    <div className = 'home-page'>
        <div className='banner'>
            <div className='container'>
            <h1>Medium clone</h1>
            <p>Your knowledge share point</p>
        </div>
        </div>
        
        <div className='container page'>
            <div className='row'>
                <div className='col-md-9'>
                    {isLoading? <div>Page loading...</div>: null}
                    {error? <div>Unknown error occurred...</div>: null}
                    {!isLoading && !error && response? 
                    <Feed articles = {response.articles}/>: 
                    null
                    }
                </div>
                <div className='col-md-3'>
                    Popular tags here!
                </div>
            </div>

        </div>
    </div>
    )
}

export default GlobalFeed;