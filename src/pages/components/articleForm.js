import React, { useEffect, useState } from 'react'; 
import BackendErrorMessages from './backendErrorMessages';



const ArticleForm = ({onSubmit, errors, initialValues}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');
    

    const handleSubmit = event => {
        event.preventDefault(); 
        onSubmit({title, body, description, tagList}); 
    }

    useEffect(()=> {
        console.log(initialValues)
        if(!initialValues) return; 
        setTitle(initialValues.title);
        setDescription(initialValues.description);
        setBody(initialValues.body);
        setTagList(initialValues.tagList.join(' '));
    }, [initialValues]); 
    
    return (
        <div className='editor-page'>
           <div className='container page'>
               <div className='row'>
                   <div className='col-md-10 offset-md-1 col-xs-12'>
                       <BackendErrorMessages backendErrors={errors}/>
                       <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input 
                                    type='text' 
                                    className = 'form-control form-control-lg'
                                    placeholder = 'Article title'
                                    value = {title}
                                    onChange = {e=>setTitle(e.target.value)}
                                    />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                    type='text'
                                    className = 'form-control form-control-lg'
                                    placeholder = 'what is this article about?'
                                    value = {description}
                                    onChange = {e=>setDescription(e.target.value)}
                                    />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <textarea
                                    rows='8'
                                    className = 'form-control form-control-lg'
                                    placeholder = 'Article body (in markdown)'
                                    value = {body}
                                    onChange = {e=>setBody(e.target.value)}
                                    ></textarea>
                                </fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                    type='text'
                                    className = 'form-control form-control-lg'
                                    placeholder = 'Article tags (spearate by space)'
                                    value = {tagList}
                                    onChange = {e=>setTagList(e.target.value)}
                                    />
                                </fieldset>

                                <fieldset className='form-group'>
                                   <button type = 'submit' className = 'btn btn-lg pull-xs-right btn-primary'>
                                       Publish Article
                                   </button>
                                </fieldset>
                            </fieldset>
                       </form>
                   </div>
               </div>
           </div>
        </div> 
    ); 
}

export default ArticleForm;