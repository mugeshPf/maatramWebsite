import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import style from './Navbar.css';


import  Home from '../../pages/home/HomePage.jsx'
import Objective from '../../pages/objective/objectivePage.jsx'

class NavbarView extends React.Component {
    constructor(props){
         super(props);
    }   
   render() {
     return( 
       <div>
         <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What We Do</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Our Partners</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">News & Events</a></li>
                    <li><a href="#">Awards</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>  
    </div>

     );    
   }
 }  
 
 export default NavbarView
