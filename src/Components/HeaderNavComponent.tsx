import {Link} from 'react-router-dom'
import { ButtonStyle} from './ButtonStyle'
export default function HeaderNavComponent() {
    const categories = [
        {id:"events",name: 'eventos' , path:"#"},
        {id:"news",name: 'noticias' , path:"#"},
        {id:"blog",name: 'blog' , path:"#"},
        {id:"contact",name: 'contacto' , path:"#"},
    ]
    
    return(
        <>
            <div className='flex justify-center capitalize gap-2'>
                { categories.map(category => (
                    <label className='' htmlFor={category.id}>
                        <Link className={ButtonStyle+'font-serif'} to={category.path}>{category.name}</Link>
                    </label>
                ))}
            </div>
        </>
    )
}