import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Views/Login/Login';
import Signup from './Views/Signup/Signup';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/pages/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;
