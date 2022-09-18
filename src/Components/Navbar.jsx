import React, { useEffect, useState } from 'react'
import "./css/Navbar.css"
import { Link } from 'react-router-dom'
import Fade from "react-reveal/Fade";



function Navbar() {
    const [barsIcon, setBarsIcon] = useState("block");
    const [navs, setNavs] = useState("none");
    const [sidebar, setSidebar] = useState("none");

    function bars() {
        setBarsIcon("none");
        setNavs("flex");
    }
    function close() {
        setNavs("none");
        setBarsIcon("block");
    }
    

    function sidebarclose(){
        setSidebar("none")
    }
    console.log(sidebar)

    return (
        <div className="navv">
            <div className='navv-linkss' id="navv-links">
                <div className='imgg'>
                <img src="https://i.ibb.co/NLXQtLQ/zee5-removebg-preview.png" alt="Netflix Logo" className="nav-logo" />
                </div>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/zee5/TVshows'><h4>TV Shows</h4></Link>
                <Link to='/zee5/Movies'><h4>Movies</h4></Link>
                <Link to='/zee5/Web-series'><h4>Web Series</h4></Link>
                <Link to='/zee5/News'><h4>News</h4></Link>
            </div>
            <div className='navv-linkss' id="navv-link">
                {/* <div className='input-div'>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder='Search for Movies ,Shows etc..' />
                </div> */}
                {/* <i class="fas fa-download"></i> */}
                <Link to='/zee5/Login'>
                <button className='login-button'>LOGIN</button>
                </Link>
                <button className='buy-button'>BUY PLAN</button>
                <i class="fas fa-align-justify"></i>
            </div>

            
            <Fade right cascade>
           {/*  */}
                <div className="mob-nav" style={{ display: `${navs}` }}>
                    <div className="close">
                        <i className="fas fa-times" onClick={close} />
                    </div>
                    <Link to='/'><h4>Home</h4></Link>
                    <Link to='/zee5/TVshows'><h4>TV Shows</h4></Link>
                    <Link to='/zee5/Movies'><h4>Movies</h4></Link>
                    <Link to='/zee5/Web-series'><h4>Web Series</h4></Link>
                    <Link to='/zee5/News'><h4>News</h4></Link>
                    <Link to='/zee5/Login'><h4>Login</h4></Link>
                </div>
            </Fade>



            <div className="bar">
                                <div className='imgg'>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg" alt="Netflix Logo" className="nav-logo" />
            </div>
                <i
                    className="fas fa-bars"
                    style={{ display: `${barsIcon}` }}
                    onClick={bars}
                ></i>
            </div>

            <div className='sidebar'  style={{ display: `${sidebar}` }}>
            <div className="close">
                        <i className="fas fa-times" onClick={sidebarclose} />
                    </div>
                    <Link to='/'><h4>Home</h4></Link>
                    <Link to='/zee5/TVshows'><h4>TV Shows</h4></Link>
                    <Link to='/zee5/Movies'><h4>Movies</h4></Link>
                    <Link to='/zee5/Web-series'><h4>Web Series</h4></Link>
                    <Link to='/zee5/News'><h4>News</h4></Link>
            </div>

        </div>
    )
}

export default Navbar