import {  useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Signin =()=>{
const [Data,setData]=useState({
    
    Email:"",
    Password:"",
   
    
});
const dispatch = useDispatch();
   const navigate = useNavigate();
function handleChange(e){
const {id,value}=e.target;

setData({
    ...Data,
    [id]:value
})

}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then((data) => {
       data.data.map((item) => {
          // console.log(item);
          if (
             item.Email === Data.Email &&
             item.Password === Data.Password
          ) {
             // console.log(item);
             dispatch(login({ Email: item.Email, isLoggedin: true }));
             console.log(item.role);
            //  navigate("/Admin");
            alert("Login Successful")
            return;
          }
          else if(item.Email !== Data.Email &&
            item.Password !== Data.Password)
            {
          alert("Invalid")
           navigate("/Signin");
          }
       });
    });
 };

// function handleSubmit(event){
// event.preventDefault();

// fetch ("http://localhost:8080/users",{
// method:"POST",
// headers:{
//     "content-type":"application/json"
// }
// ,
// body:JSON.stringify(Data),



// })
//

// }

    return (
    <div className="Input">
    <h3>ALREADY REGISTERED?</h3>
    <p>If you have an account with us, please log in.</p>

<form onSubmit={handleSubmit}>
    

 <input id="Email" onChange={handleChange} placeholder="Email" type="email" />
<br/>
<input id="Password" onChange={handleChange} placeholder="Password" type="password" />
<br/>
<p>*Required fields</p>
<p>Forgot Your Password?</p>
<input className="button" type="submit" value="LOGIN"/>
<p>
At Mytheresa, we keep your information secure. As a result, it will be<br/>
 necessary for you to log in to your account before you are able to place an <br/>
 order or change the information on your account. You will be asked to log<br/>
  in to complete your order even if you have already been greeted on the<br/>
   website.

</p>


</form>

    </div>)
}