import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as CONFIG from "./config";
import Layout from "./Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";

const Placeholder = ({ title }) => {
    return (<>{title}</>);
}

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path={ CONFIG.PATH_ABOUT } element={ <About /> } />
                <Route path={ CONFIG.PATH_PORTFOLIO } element={ <Placeholder title="portfolio" /> } />
                <Route path={ CONFIG.PATH_EXPERIENCE } element={ <Experience /> } />
                <Route index element={ <Placeholder title="home" /> } />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;