
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
import Footer from './Components/Shared/Footer/Footer';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ContactUs from './Components/ContactUs/ContactUs';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
      <Route path='/add-item' element={<RequireAuth>
        <AddItem></AddItem>
      </RequireAuth>}></Route>
      <Route path='/inventory/:id' element={<RequireAuth>
        <UpdateItem></UpdateItem>
      </RequireAuth>}></Route>
       <Route path='/my-items' element={<RequireAuth>
        <MyItems></MyItems>
       </RequireAuth>} ></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
       <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      
    </Routes>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
