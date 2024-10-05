import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultcart=()=>{
    let cart={};
    for(let index=0; index<all_product.length; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem,setCartItem]=useState(getDefaultcart());
   
   
    const addTocart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
        
    }

    const removeFromcart = (itemId) => {
        setCartItem((prev) => {
            if (prev[itemId] > 0) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev;  
        });
    };
    
       

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItem) {
                if (cartItem[item] > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
            return totalAmount;
        };

        const getTotalCartItems=()=>{
            let totalItem=0;
            for(const item in cartItem){
                if(cartItem[item]>0){
                    totalItem+=cartItem[item];
                }
            }
            return  totalItem;
        }
        


        const contextValue = { all_product ,cartItem,addTocart,removeFromcart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
