import React from 'react'; 
const TagList = ({tags}) => {
return (
    <ul className= 'tag-list'>
        {tags.map(t=>(
        <li key={t} className='tag-default tag-pill tag-outline'>
            {t}
        </li>
        ))}
    </ul>
    );
}

export default TagList;