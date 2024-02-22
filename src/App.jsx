import './App.css'
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import State from './context/State';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import Signup from './components/Signup';



const App = () => {
  
  const width = window.innerWidth;
  
  return (
    <State>
    <main className="font-custom min-h-[100vh]">
    <Router>
      {width > 650 ? <Navbar /> : <Drawer/>}
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        { /*<Route exact path="/admin/signup" element={<Signup/>}/>*/}
        {/* <Route exact path="/login" element={<Login/>}/> */}
        <Route exact path="/blog/:id" element={<BlogPage />} />
          </Routes> 
      <Footer/>
    </Router>
    </main>
    </State>
  )
}

export default App;