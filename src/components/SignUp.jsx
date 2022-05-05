import {  useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const SignUp =()=>{
const [Data,setData]=useState({
    First_Name:"",
    Last_Name:"",
    Email:"",
    Password:"",
    Confirm_Password:"",
    
});
function handleChange(e){
const {id,value}=e.target;

setData({
    ...Data,
    [id]:value
})

}

function handleSubmit(event){
event.preventDefault();

fetch ("http://localhost:8080/users",{
method:"POST",
headers:{
    "content-type":"application/json"
}
,
body:JSON.stringify(Data),



})
alert("Done");

}

    return (
    <div className="Input">
    <h3>CREATE AN ACCOUNT</h3>
    <p>Please enter the following information to create your account.</p>
    
<form onSubmit={handleSubmit}>
    
<input id="First_Name" onChange={handleChange} placeholder="First Name" type="text" required/>
<br/>
<input id="Last_Name" onChange={handleChange} placeholder="Last Name" type="text" required/>
<br/>
 <input id="Email" onChange={handleChange} placeholder="Email" type="email" required/>
<br/>
<input id="Password" onChange={handleChange} placeholder="Password" type="password" required />
<br/>
<input id="Confirm_Password" onChange={handleChange}  placeholder="Confirm Password" type="password" required/>
<br/>
<p>
From now on I will receive the Mytheresa Newsletter with selected <br/>
fashion offers. If I do not wish to receive the newsletter, I can unsubscribe<br/>
 at any time free of charge at privacy@mytheresa.com.<br/>
 <br/>
I agree that Mytheresa may insert analytical web beacons into the <br/>
newsletter and create a personalized user profile based on my purchase <br/>
and usage behavior, including sending a notification when I have placed <br/>
something in the shopping cart. Further details can be found in our Privacy<br/>
 Policy, clause 5. I understand that I can revoke my consent at any time by<br/>
  emailing privacy@mytheresa.com.

</p>

<input className="button" type="submit" value="REGISTER"/>
</form>

    </div>)
}