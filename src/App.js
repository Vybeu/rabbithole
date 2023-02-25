import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './config/contexts/AuthContext';
import { Navbar } from './components';
import { Home, Login, Create, About, Register, } from './pages';

function App() {
 
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Protected><Create /></Protected>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
