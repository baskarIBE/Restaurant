import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint.js";
export const getallprocuts=async()=>{
    const val=await axios.get(`${apiurl()}/products/getproduct`)
    return val.data;
}