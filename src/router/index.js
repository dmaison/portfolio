import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as CONFIG from "./config";
import Layout from "./Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Album from "./pages/Album";

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path={ CONFIG.PATH_ABOUT } element={ <About /> } />
                <Route path={ CONFIG.PATH_PORTFOLIO } element={ <Portfolio /> } />
                <Route path={ CONFIG.PATH_EXPERIENCE } element={ <Experience /> } />
                <Route path={ CONFIG.PATH_ALBUM } element={ <Album /> } />
                <Route index element={ <Home /> } />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;