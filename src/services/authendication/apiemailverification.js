import axios from "axios"
import apiurl from "../apiendpoint/apiendpoint"

 const apiemailotp=async(duemail)=>{
    try {
    const logval=await axios.post(`${apiurl()}/auth/send-otp`,{ email: duemail })
    console.log(logval);
    return logval.data;
} 
catch (error) {
        console.error('Error sending OTP:', error);
        throw error; // Re-throw the error to handle it elsewhere
      }
}
const apiverifyotp=async(data)=>{
    try {
        console.log(data);
    const getotp=await axios.post(`${apiurl()}/auth/get-otp`,data)
    
    return getotp.data;
    }
    catch (error) {
        console.error('Error sending OTP:', error);
        throw error; // Re-throw the error to handle it elsewhere
    }
}
export{apiemailotp,apiverifyotp}
