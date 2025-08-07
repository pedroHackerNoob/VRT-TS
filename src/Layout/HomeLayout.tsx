import {Outlet} from "react-router-dom";
import HeaderNavComponent from "../Components/HeaderNavComponent";
import FooterNavComponent from "../Components/FooterNavComponent";

export default function HomeLayout() {
    return(
        <>
            <header className='grid capitalize gap-2'>
                <div className='grid p-1 font-serif'>
                    <h1 className=' text-5xl '>SAISW</h1>
                    <h2 className='text-3xl'>sociedad de alumnos de ingenieria en software</h2>
                </div>
                <div className='flex justify-center md:justify-end border-y-1 p-2'>
                    {<HeaderNavComponent></HeaderNavComponent>}
                </div>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer className='grid'>
                {<FooterNavComponent></FooterNavComponent>}
                <div className='grid justify-items-center'>
                    <h3>ISW 2025</h3>
                    <p>Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    )
}