import React from 'react'; 

const BackendErrorMessages = ({backendErrors}) => {
    console.log('DATA IN? ', backendErrors);
    // console.log('DATA IN? ', backendErrors.backendErrors);
    // let data = backendErrors.backendErrors; 
    const errorMessages = Object.keys(backendErrors).map(name=>{
        const messages = backendErrors[name].join(' ');
        return `${name} ${messages}`;
    })

    return (
   <ul className='error-messages'>
       {errorMessages.map(em=>{
           return(<li key={em}>{em}</li>)
       })}
   </ul>
    ); 
}

export default BackendErrorMessages;