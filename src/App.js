
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyItems from './Components/MyItems/MyItems';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import UpdateItem from './Components/Shared/UpdateItem/UpdateItem';
import AddItem from './Components/AddItem/AddItem';
import AllGadgets from './Components/AllGadgets/AllGadgets';
import Footer from './Components/Shared/Footer/Footer';


function App() {
  return (
    <div>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/all-products' element={<AllGadgets></AllGadgets>}></Route>
      <Route path='/add-item' element={<AddItem></AddItem>}></Route>
      <Route path='/update/:id' element={<UpdateItem></UpdateItem>}></Route>
       <Route path='/my-items' element={<MyItems></MyItems>} ></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
       <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      
    </Routes>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
