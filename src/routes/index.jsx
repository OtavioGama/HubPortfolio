import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop';
import ProjectViewer from '../components/ProjectViewer';

import Home from '../pages/Home';
import DesignDigital from '../projects/ReactProjects/DesignDigitalPropsUseState/src/App.jsx';

function MainRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            
            <Routes>
                <Route exact path='/' element={ <Home/> } />
                <Route path='/ReactProjects/DesignDigital' element={ <DesignDigital/> } />
                <Route path='/HTMLprojects/:project' element={ <ProjectViewer /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes