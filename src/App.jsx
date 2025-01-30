import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx';
import Login from './pages/HomePage/components/LogIn.jsx';
import Register from './pages/HomePage/components/Register.jsx'; // Import the Register component

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mcgi-feast-portal' element={<Home />} />
        <Route path='/mcgi-feast-portal-log-in' element={<Login />} />
        <Route path='/mcgi-feast-portal-sign-up' element={<Register />} /> {/* Add the Register route */}
      </Routes>
    </>
  );
}

export default App;
