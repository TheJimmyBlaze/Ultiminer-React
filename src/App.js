import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login';
import Authentication from './features/authentication/Authentication';

const App = () => {

    return (
        <div className="vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">

                <Router>
                    <Routes>
                        <Route path="/" element={ <Home /> }/>
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/auth" element={ <Authentication /> } />
                    </Routes>
                </Router>

            </div>
        </div>
    );
};

export default App