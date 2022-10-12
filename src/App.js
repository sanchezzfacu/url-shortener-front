import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import AllLinks from './views/AllLinks'
import Redirect from './views/Redirect';
import NotFound from './views/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/all' element={<AllLinks/>}/>
                <Route path='/:id' element={<Redirect/>} />
                <Route path='/error' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App  