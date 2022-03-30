
import { Route, Routes } from 'react-router';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <h1>welcome to my fancy website</h1>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/friend' element={<Friends></Friends>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
