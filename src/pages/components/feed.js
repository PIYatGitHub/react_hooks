import React from 'react'; 
import { Link } from 'react-router-dom';

const Feed = ({articles}) => {
return <div>{
    articles.map((article, index)=> (
        <div className='article-preview' key={index}>
            <div className='article-meta' key={index}>
                <Link to={`/profiles/${article.author.username}`}>
                    <img alt='' src={article.author.image} />            
                </Link>
            </div> 
             <div className='info'>             
                <Link to={`/profiles/${article.author.username}`} className='author'>
                    {article.author.username}            
                </Link>      
                <span className='date'>{article.createdAt}</span>      
             </div>
             <Link to={`/articles/${article.slug}`} className='preview-link'>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className= 'tag-list'>
                    {article.tagList.map(t=>(
                        <li key={t} className='tag-default tag-pill tag-outline'>
                            {t}
                        </li>
                    ))}
                </ul>
             </Link>
        </div>       
    ))}
    </div>
}

export default Feed;