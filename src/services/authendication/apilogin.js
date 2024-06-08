import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint.js";

export const apilogin=async(logdudata)=>{
    const logval=await axios.post(`${apiurl()}/auth/apilogin`,logdudata)
    return logval.data;
}