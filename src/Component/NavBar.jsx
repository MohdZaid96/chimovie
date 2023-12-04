
import { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../Styles/navbar.css"
import { useLocation } from 'react-router-dom';



function NavBar() {
  const location = useLocation();
  const path=location.pathname.substring(1);

  const nav=useNavigate();
  const [token,setToken]=useState(null);
  
  const handleClick=()=>{
    console.log(token);
    localStorage.setItem("token",false);
    setToken(false);

  }
  useEffect(()=>{
    setToken(localStorage.getItem("token") || null);

  },[location.pathname])
  
    
  return (
    <div id='main'>
        <div className="container-fluid">
          <h1 className="navbar-brand" onClick={()=>{
            nav(`/`)
          }}>
            chi
          </h1>         
        </div>
        <div id='a'>
             <Link to={"/fav"}>Wishlist</Link>
             {!token?<>{path == "login" &&  <Link to={"/signup"}>Signup</Link> || 
             path == "signup" && <Link to={"/login"}>Login</Link>} </>:<Link to={"/login"} onClick={handleClick}>Signout</Link>
              
             }
          </div>
    </div>
  );

  
}
export default NavBar;
