
import toast from 'react-hot-toast';
import Loginform from '../../shared/components/form/Loginform'
import { apilogin } from '../../services/authendication/apilogin';
import { useState } from 'react';
import useAuth from '../../shared/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {settoken}=useAuth();
  const navigate=useNavigate();
    const [formdata,setformdata]=useState({});
    const handlechange=(e)=>setformdata({...formdata,...{[e.target.name]: e.target.value}});
    const handlelogin=async(e)=>{
        e.preventDefault();
        console.log(formdata)
        const res=await apilogin(formdata)
        console.log(res);
        res.message=="successfully Logged in"?succeslogin(res):toast.error(res.message);
        // console.log(res.message);
    }
    const succeslogin=(res)=>{
      settoken(res?.token)
      toast.success(res?.message);
      navigate('/')
  }
  return (
    <div><Loginform handlechange={handlechange} handlelogin={handlelogin} /></div>
  )
}
