import { createSlice } from "@reduxjs/toolkit";

const AddCartClice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddToCart:(state,action)=>{
            const ItemInCart=state.find((item)=>(
                  item.id===action.payload.id
            ))
            if(ItemInCart){
                ItemInCart.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity :1})
            }

        },
        RemoveFromCart:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
       },
       DecreaseQuantity:(state,action)=>{
        const decreaseItem=state.find(item=>item.id==action.payload)
        if(decreaseItem.quantity==1){
            return state.filter(item=>item.id!=action.payload)
        }
        else{
            decreaseItem.quantity--
        }
       }
    
    }
})
export const{AddToCart,RemoveFromCart,DecreaseQuantity}=AddCartClice.actions
export default AddCartClice.reducer