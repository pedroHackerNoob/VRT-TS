import {Link} from 'react-router-dom'

function xd(){
    return(
        <>
            <article className='grid gap-1 font-serif border-1 p-1'>
                <h1 className='capitalize'>software dev</h1>
                <img className='grid' src='https://as2.ftcdn.net/v2/jpg/03/08/69/75/1000_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <label className='flex justify-center'>
                    <Link to='#' className='bg-blue-300 flex px-1'>Nota completa</Link>
                </label>
            </article>
        </>
    )
}

export default function HomeView() {
    return(
        <>
            <h1 className='capitalize grid font-serif justify-center bg-blue-300 py-1'>Liderazgo, comunidad y acción.</h1>
            <div className='grid'>
                <div className='grid bg-no-repeat h-50 md:h-100 lg:h-180 bg-cover bg-[url("https://as2.ftcdn.net/v2/jpg/12/09/29/37/1000_F_1209293731_NsTx68RoqqXpRcJsqHdJpY8Wia9lNa3c.jpg")]'>
                    <div className='grid bg-black/60 h-full w-full'>
                        <h1 className=' ml-2 flex items-center text-white font-bold md:text-2xl lg:text-3xl'>Bienvenido a la comunidad estudiantil.</h1>
                    </div>
                </div>
            </div>
            <h1 className='capitalize grid font-serif justify-center bg-blue-300 py-1'>ultimas actualizaciones.</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 p-1'>
                {xd()}
                {xd()}
                {xd()}
                {xd()}
            </div>
            <h1 className='capitalize grid font-serif justify-center bg-blue-300 py-1'>ultimos eventos.</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 p-1'>
                {xd()}
                {xd()}
                {xd()}
                {xd()}
            </div>
        </>
    )
}