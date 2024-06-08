import { create } from "zustand";
const useAuth=create((set)=>({
    IsloggedIn:localStorage.getItem("access_token")!=null?true:false,
    // settoken:(token)=>set((state)=>{
        settoken:(token)=>set(()=>{
        console.log(token);
        localStorage.setItem("access_token",token)

        // return {token:token,IsloggedIn:true}
        return {IsloggedIn:true}
    }),
    userdetails:()=>{
        var token=localStorage.getItem("access_token");
        if(token!=null){
            // console.log(JSON.parse(window.atob(token.split('.')[1])));
            const decode=JSON.parse(window.atob(token.split('.')[1]));
            return decode;
        }
        else{
            return null;
        }
    },
    logout:()=>set(()=>{
        localStorage.removeItem("access_token");
        return {IsloggedIn:false}
    })
}))
export default useAuth;