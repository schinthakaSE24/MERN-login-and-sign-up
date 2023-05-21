import './App.css';
import Login from './componet/Login';
import Signup from './componet/Signup';
import Home from './componet/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup/>} />
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/Home" element={<Home/>} />

     
    </Routes>
  </BrowserRouter>,

      
     
    </div>
  );
}

export default App;
