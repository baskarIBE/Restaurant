import { useState } from "react";
import Registrationform from "../../shared/components/form/Registrationform";
import toast from "react-hot-toast";
import { apiregister } from "../../services/authendication/apiregister";
import { useNavigate } from "react-router-dom";




export default function Registration() {
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({});
  const handlechange=(e)=>setformdata({...formdata,...{[e.target.name]:e.target.value}})

  const handleregister=async(e)=>{
    e.preventDefault();
    const password=formdata.password;
    const conformpassword=formdata.confirm_password;
    if (password == conformpassword) {
      console.log(formdata);
      const res=await apiregister(formdata);
      console.log(res);
      res.message=="successfully Registered"?succesregister(res):toast.error("Failed to register");
    console.log(res.message);
    }else{
      toast.error("Passwords do not match");
    }
    // res.message=="successfully Registered"?succesregister(res):toast.error("Failed to register");
    // console.log(res.message);
   
  }

  const succesregister=(res)=>{
    toast.success(res.message);
    navigate('/login')
}
  return (
    <div><Registrationform  handlechange={handlechange} handleregister={handleregister}/></div>
  )
}
