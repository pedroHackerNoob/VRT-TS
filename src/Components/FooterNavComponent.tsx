import {Link} from 'react-router-dom'
export default function FooterNavComponent() {
    const social = [
        {id:"face",name: 'facebook' , path:"#"},
        {id:"insta",name: 'instagram' , path:"#"},
        {id:"twit",name: 'X' , path:"#"},
        {id:"yt",name: 'youtube' , path:"#"},

    ]
    const resources =[
        {id:"terms",name: 'terminos y condiciones' , path:"#"},
        {id:"privacy",name: 'politica de privacidad' , path:"#"},
        {id:"support",name: 'asesorias' , path:"#"},
        {id:"contact",name: 'miebros del staff' , path:"#"},
    ]

    return(
        <>
            <div className='flex justify-evenly'>
                <div className='grid capitalize gap-1'>
                    <h1 className='text-2xl'>siguenos</h1>
                    { social.map(category => (
                        <label className=' ' htmlFor={category.id}>
                            <Link className='text-lg bg-blue-300 p-1' to={category.path}>{category.name}</Link>
                        </label>
                    ))}
                </div>
                <div className='grid capitalize gap-1'>
                    <h1 className='text-2xl'>enlaces y recursos</h1>
                    { resources.map(resources => (
                        <label className='' htmlFor={resources.id}>
                            <Link className='text-lg bg-blue-300 p-1' to={resources.path}>{resources.name}</Link>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}