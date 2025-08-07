import {Link} from 'react-router-dom'
import { ButtonStyle} from './ButtonStyle'

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
        {id:"contact",name: 'miembros del staff' , path:"#"},
        {id:"",name: 'acerca de nosotros' , path:"#"},
        {id:"",name: 'patrocinadores' , path:"#"},
    ]
    const tittleStyle = " text-2xl underline "
    return(
        <>
            <div className='flex justify-evenly font-serif'>
                <div className='flex flex-col capitalize gap-1'>
                    <h1 className={tittleStyle+""}>siguenos:</h1>
                    { social.map(category => (
                        <label className=' ' htmlFor={category.id}>
                            <Link className={ButtonStyle} to={category.path}>{category.name}</Link>
                        </label>
                    ))}
                </div>
                <div className='flex flex-col capitalize gap-1'>
                    <h1 className={tittleStyle}>enlaces y recursos:</h1>
                    { resources.map(resources => (
                        <label className='' htmlFor={resources.id}>
                            <Link className={ButtonStyle} to={resources.path}>{resources.name}</Link>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}