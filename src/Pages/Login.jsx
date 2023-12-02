import React, {  useState } from "react";
import "../Styles/login.css"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom";


const Login = () => {
    const users=JSON.parse(localStorage.getItem("users")) || []
    // localStorage.setItem("account-data", JSON.stringify(arr));
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const nav=useNavigate();

    const handleLogin=()=>{
        if(!email || !pass ){
            alert("Please fill all the field");
        }else{
            console.log(users)
            const check=users.filter((obj) => {if(obj.email==email){
                return true;
            }});
            if(check)
            {
                localStorage.setItem("token", true);
                nav("/");
            }else{
                console.log("else");

               alert("NOT A USER!!! Signup first");
               nav("/signup");

            }
        }
    }

  return (
    <div id="login_main">
  <div id="inner">  
    <form>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email..." onChange={(e)=>{
            setEmail(e.target.value);
      }} />
        <div id="emailHelp" className="form-text" style={{color: 'white'}}>We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{
            setPass(e.target.value);
      } }/>
      </div>
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="exampleCheck1"><link to="/signup" />Create an account</label>
      </div>
      <button type="submit" className="btn btn-primary" style={{backgroundcolor:  "rgb(57, 56, 56)",border:"none" }} onClick={()=>{
        handleLogin();
      }}>Submit</button>
    </form>
  </div>
</div>






    
  )
}

export default Login