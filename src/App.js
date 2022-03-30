
import { Route, Routes } from 'react-router';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/friend' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/post' element={<Post></Post>}>
          <Route path=':postid' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
