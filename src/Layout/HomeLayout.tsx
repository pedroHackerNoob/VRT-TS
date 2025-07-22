import {Outlet} from "react-router-dom";

export default function HomeLayout() {
    return(
        <>
            <header className='font-black text-5xl'>
                <h1>Home layout</h1>
                <p>This is the home layout</p>
            </header>
            <div>
                <Outlet/>
            </div>
        </>
    )
}