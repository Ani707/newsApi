import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import  {Home}  from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
export const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/general" element={<FetchData cat="general"/>}/>
        <Route  path="/Business" element={<FetchData cat="Business"/>}/>
        <Route  path="/Entertainment" element={<FetchData cat="Entertainment"/>}/>
        <Route  path="/Health" element={<FetchData cat="Health"/>}/>
        <Route  path="/Science" element={<FetchData cat="Science"/>}/>
        <Route  path="/Sports" element={<FetchData cat="Sports"/>}/>
        <Route  path="/Technology" element={<FetchData cat="Technology"/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App