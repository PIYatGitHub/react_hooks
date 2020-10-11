import { useState, useEffect } from 'react'; 
import axios from 'axios';

export default (url) => {
    const baseUrl = 'https://conduit.productionready.io/api';

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [reqOptions, setReqOptions] = useState({});

    const doFetch= (options = {})=>{
        console.log('I am in doFetch!')
        setReqOptions(options); 
        setIsLoading(true);
    }

    useEffect(()=>{
        if(!isLoading) return; 

        const reqUrl = baseUrl + url; 
        setIsLoading(true); 

        axios(reqUrl, reqOptions)
        .then(r=> {
            console.log('result is: ', r);
            setResponse(r.data); 
            setIsLoading(false)
        }).catch(e=>{
            console.log('error is: ', e);
            setError(e.response.data);
            setIsLoading(false)
        });
    }, [isLoading, reqOptions, url]);
return [{response, error, isLoading}, doFetch]
}