import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Views/Login/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
