import {Outlet,Link} from "react-router-dom";
import HeaderNavComponent from "../Components/HeaderNavComponent";

export default function HomeLayout() {
    return(
        <>
            <header className='grid capitalize'>
                <h1 className=' text-5xl'>ISW</h1>
                <h2 className='text-3xl'>sociedad de alumnos de ingenieria en software</h2>
                {<HeaderNavComponent></HeaderNavComponent>}

            </header>
            <div>
                <Outlet/>
            </div>
            <footer className='grid'>
                <div className='grid grid-cols-2 md:grid-cols-1 justify-center gap-1 px-3'>
                    <div className='capitalize'>
                        <h3 className=' text-2xl'>siguenos:</h3>
                        <Link className='flex' to='#'>facebook</Link>
                        <Link className='flex' to='#'>instagram</Link>
                        <Link className='flex' to='#'>twitter</Link>
                        <Link className='flex' to='#'>youtube</Link>
                    </div>
                    <div className='capitalize'>
                        <h3 className=' text-2xl'>enlace y recursos:</h3>
                        <Link className='flex' to='#'>asesorias</Link>
                        <Link className='flex' to='#'>acerca de nosotros</Link>
                        <Link className='flex' to='#'>miembros del staff</Link>
                        <Link className='flex' to='#'>link</Link>
                    </div>
                </div>

                <h3>ISW 2025</h3>
                <div>
                    <p>Todos los derechos reservados</p>

                </div>
            </footer>
        </>
    )
}