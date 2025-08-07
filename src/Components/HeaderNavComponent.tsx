import {Link} from 'react-router-dom'
export default function HeaderNavComponent() {
    const categories = [
        {id:"events",name: 'eventos' , path:"/events"},
        {id:"news",name: 'noticias' , path:"/news"},
        {id:"about",name: 'nosotros' , path:"/about"},
        {id:"contact",name: 'contacto' , path:"/contact"},
    ]
    
    return(
        <>
            <div className='flex justify-center capitalize gap-2'>
                { categories.map(category => (
                    <label className='p-1 bg-blue-300' htmlFor={category.id}>
                        <Link className='text-lg font-serif' to={category.path}>{category.name}</Link>
                    </label>
                ))}
            </div>
        </>
    )
}