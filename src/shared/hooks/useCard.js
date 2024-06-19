import { create } from "zustand";
const useCart=create((set)=>({
    count:parseInt(localStorage.getItem('cartcount')) || 0,

    // setcount:()=>set((state)=>({count:state.count+1})), additem functionality

    // increment and decrement operation
    inc:()=>set((state)=>{
        var countstate=state.count+1; 
        localStorage.setItem('cartcount',countstate)
        return {count:countstate}
    }),
    // dec:()=>set((state)=>({count:state.count-1})),
    dec:()=>{
        // Ternary conditional operator
        // set((state)=>({count:state.count > 0 ? state.count -1:0})) 
        set((state)=>{
            var countstatedec=state.count > 0 ? state.count -1:0
            localStorage.setItem('cartcount',countstatedec)
            return {count:countstatedec}
        })
    }
}))
export default useCart;