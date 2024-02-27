import React from "react";
import './styles.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import Cart from "./components/cart";
import Navbar from "./components/navbar";

function App(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App