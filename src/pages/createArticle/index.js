import React, { useEffect, useState, useContext } from 'react'; 
import ArticleForm from '../components/articleForm';
import useFetch from '../../hooks/useFetch'; 
import { Redirect } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/currentUser';

const CreateArticle = () => {   
    const apiUrl = '/articles'; 
    const handleSublit = article=>{
        doFetch({
            method: 'post', 
            data: {article}
        })
    };
    const [{response, error}, doFetch] = useFetch(apiUrl); 
     const initialValues = {
         title: '',
         description: '',
         body: '',
         tagList:[]
    };
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false); 
    const [currentUserState] = useContext(CurrentUserContext); 

    useEffect(()=>{
        if(!response) return; 
        setIsSuccessfullSubmit(true); 

    }, [response, isSuccessfullSubmit]);

    if(isSuccessfullSubmit) return <Redirect to={`/articles/${response.article.slug}`} />
    if(!currentUserState.isLoggedIn) return <Redirect to={'/'} />

    return (
        <div>
            <ArticleForm 
            errors = {(error && error.errors)||{}}
            initialValues = {initialValues}
            onSubmit = {handleSublit}
            />
        </div>
        
    ); 
}

export default CreateArticle;