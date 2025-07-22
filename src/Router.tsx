import { BrowserRouter, Routes, Route} from  'react-router-dom'
import HomeLayout from "./Layout/HomeLayout.tsx";
import Home from "./views/HomeView.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                {/*    <Route path="/about" element={<AboutView />} />*/}
                {/*    <Route path="/register" element={<RegisterView />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}