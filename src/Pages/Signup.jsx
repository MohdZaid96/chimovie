import React, { useEffect, useState } from "react";
import "../Styles/login.css"
import {useNavigate} from "react-router-dom";


const Signup = () => {
    const users=JSON.parse(localStorage.getItem("users")) || []
    // localStorage.setItem("account-data", JSON.stringify(arr));
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passC, setPassC] = useState("");
    const nav=useNavigate();



    const handleSignup=()=>{
        if(!email || !pass || !passC){
            alert("Please fill all the field");
        }else{
            if(users.filter(obj => obj.email==email))
            {
                alert("Already a user");
                nav("/login");
            }else{
                var obj={
                    email,pass,passC
                }
                users.push(obj);
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("token", true);

            }
        }
    }






  return (
    <div id='login_main'>
        
        <div id="inner">  
        <form>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email...' onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <div id="emailHelp" class="form-text" style={{color:"white"}}>We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' onChange={(e)=>{
                setPass(e.target.value);
            }}/>
          </div>
          <div class="mb-4">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Password' onChange={(e)=>{
                setPassC(e.target.value);
            }}/>
          </div>
          <button type="submit" class="btn btn-primary" style={{backgroundColor: "rgb(57, 56, 56)",border:"none"
          }} onClick={handleSignup}>Sign up</button>
        </form>
        </div>
    </div>
  )
}

export default Signup