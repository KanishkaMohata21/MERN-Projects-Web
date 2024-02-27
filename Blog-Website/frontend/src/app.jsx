import React from "react";
import Home from "./components/home";
import Add from "./components/add";
import Navbar from "./components/navbar";
import './components/styles.css'; 
import {Route, Routes} from 'react-router-dom'

function App(){
    return(
        <div className="container">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/add" element={<Add/>}/>
            </Routes>

        </div>
    )
}

export default App