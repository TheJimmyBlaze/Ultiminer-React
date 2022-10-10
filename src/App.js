import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login';
import Authentication from './features/authentication/Authentication';
import MiningForm from './features/mining/MiningForm';

const App = () => {

    return (
        <div className="d-flex justify-content-center min-vh-100">

            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<MiningForm />} />
                        <Route path="inventory" element={<h1>Inventory</h1>} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/auth" element={<Authentication />} />
                </Routes>
            </Router>

        </div>
    );
};

export default App