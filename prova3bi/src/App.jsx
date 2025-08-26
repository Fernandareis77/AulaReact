import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import Netflix from "./Paginas/Netflix";
import Amazon from "./Paginas/Amazon";
import Disney from "./Paginas/Disney";
import HboMax from "./Paginas/HboMax";

import"./App.css";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/netflix" element={<Netflix />} />
                <Route path="/amazon" element={<Amazon />} />
                <Route path="/disney" element={<Disney />} />
                <Route path="/hbo" element={<HboMax />} />

            </Routes> 
        </BrowserRouter>

    );
}