import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Log/Login';
import Error from './Pages/Error/Error';
import Nav from './components/Navbar/Nav';
import { useState } from 'react';
import PrivateRoutes from './components/privateRoutes';
import { useEffect } from 'react';
import FoodFetcher from './Pages/FoodFetcher/FoodFetcher';
import RecipeDisplayer from './Pages/FoodFetcher/RecipeDisplayer/RecipeDisplayer';

function App() {
  const [auth, setAuth] = useState(false)
  console.log(auth);
 
  return (
<>
 <BrowserRouter >
    <Routes>
      <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/:name' element={<RecipeDisplayer/>}/>
      </Route>
      <Route path='/login' element={<Login auth={auth} setAuth={setAuth} />}/>
    </Routes>
 </BrowserRouter>
    
 </> 
  );
}

export default App;
