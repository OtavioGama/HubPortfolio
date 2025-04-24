import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DesignDigital from '../projects/DesignDigitalPropsUseState/src/App.jsx';

function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home/> } />
                <Route path='/DesignDigital' element={ <DesignDigital/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes