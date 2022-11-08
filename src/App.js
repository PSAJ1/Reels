import Signup from './components/Signup'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider } from './Context/AuthContext';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
