import axios from "axios"
import apiurl from "../apiendpoint/apiendpoint"


export const apiregister=async(regdudata)=>{
    const regval=await axios.post(`${apiurl()}/auth/apiregister`,regdudata)
    return regval.data;
}
// const RegisterPostServices = async (url,data) =>{
//     console.log(url)
//     // console.log(data);
//     return await fetch (url, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data),
//     }).then(response => response.json());
    
//     // return await axios.post(`${apiurl}/authentication/api/getotp`,data,{
//     //   headers: {
//     //     "Content-Type": "application/json",
        
//     //   },
//     // })
//   }

// export {RegisterPostServices};