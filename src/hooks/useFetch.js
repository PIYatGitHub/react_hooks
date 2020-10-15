import { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

export default (url) => {
    const baseUrl = 'https://conduit.productionready.io/api';

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [reqOptions, setReqOptions] = useState({});
    const [token] = useLocalStorage('token'); 

    const doFetch= useCallback( (options = {})=>{
        setReqOptions(options); 
        setIsLoading(true);
    }, []); 

    useEffect(()=>{
        const opts = {
            ...reqOptions,
            ...{
                headers: {
                    authorization: token? `Token ${token}`: ''
                }
            }
        }

        if(!isLoading) return; 

        const reqUrl = baseUrl + url; 
        setIsLoading(true); 

        axios(reqUrl, opts)
        .then(r=> {
            setResponse(r.data); 
            setIsLoading(false)
        }).catch(e=>{
            setError(e.response.data);
            setIsLoading(false)
        });
    }, [isLoading, reqOptions, url, token]);
return [{response, error, isLoading}, doFetch]
}