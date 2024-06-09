import React, { useContext, useState } from "react";
import { CartContext } from "../features/ContextProvider";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalItems = cart.reduce((acc,val)=>{
       return acc + val.quantity
  },0)

  const totalPrice = cart.reduce((acc,val)=>{
    return acc + val.price
  },0)

  return (
    <div className="flex p-5">
    <div className="w-[80%] p-5 ">
      {!cart.length && <p>Cart is empty</p>}
      {cart.map((product) => {
        return (
          <div key={Math.random()*44569} className="flex w-full h-[150px] border m-2 p-2">
            <div className=" w-32 p-2">
              <img src={product.image} alt="" className="w-full h-full object-center object-contain"/>
            </div>
            <div className="px-5 py-2">
              <p>{product.title}</p>
              <p>{product.price}$</p>
              <div className="w-24 flex justify-between items-center">
                <button onClick={()=>dispatch({type:"DECREASE", payload:{ id:product.id}})} className="px-3 py-1 bg-[#39c1e5] rounded-full">-</button>
                <p>{product.quantity}</p>
                <button onClick={()=>dispatch({type:"INCREASE", payload:{ id:product.id}})} className="px-3 py-1 bg-[#39c1e5] rounded-full">+</button>
              </div>
              <button onClick={()=>dispatch({type:"REMOVE", payload:{id:product.id}})} className="py-1 px-2 mt-2 bg-[#f3cf2c] rounded-lg">Remove</button>
            </div>
          </div>
        );
      })}
     
    </div>
    <div className="w-[18%] h-20 border p-3 mt-7">
        <h1>Total Items:{totalItems}</h1>
        <h1>Total Price:{totalPrice}</h1>
      </div>
    </div>
  );
};

export default Cart;
