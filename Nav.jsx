import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Nav;