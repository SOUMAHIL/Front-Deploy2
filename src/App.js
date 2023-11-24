import logo from './logo.svg';
import './App.css';
import Login from './Login';
import{HashRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Add from './Add';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div>
      <HashRouter >
        <Routes >
          
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          </Routes>
                                   
      </HashRouter>

      

    </div>
  )
} 

export default App;
