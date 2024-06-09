import React, { useContext, useState } from "react";
import { data } from "../../data";
import { CartContext } from "../features/ContextProvider";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxCount = 9;
  const indexOfLastRecord = currentPage * maxCount;
  const indexOfFirstRecord = indexOfLastRecord - maxCount;
  const visibleCount = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const pageNumbers = Math.ceil(data.length / maxCount);
  const pageNumbersList = [...Array(pageNumbers + 1).keys()].slice(1);
  const {dispatch} =useContext(CartContext)

  const prevButton = ()=>{
    console.log(currentPage)
    if(currentPage == 1){
      setCurrentPage(pageNumbers);
    }else setCurrentPage(currentPage-1)
  }
  const nextButton = ()=>{
    if(currentPage === pageNumbersList.length ){
      setCurrentPage(1);
    }else setCurrentPage(currentPage+1)
  }
  const handlePageClick = (n) => {
    setCurrentPage(n);

  };


  return (
    <div>
      <div className=" grid grid-cols-3 py-10 px-24 gap-11 ">
        {visibleCount.map((p) => {
          return (
            <div
              key={p.id}
              className=" border-[1px] rounded-lg duration-500 hover:shadow-2xl"
            >
              <div>
                <img
                  src={p.image}
                  className="w-full h-[320px] object-contain"
                />
              </div>
              <div className="h-[25%] flex flex-col justify-between">
                <div className="p-2">
                  <p className="font-medium text-sm">{p.title}</p>
                  <p className="font-medium text-lg">{p.price}$</p>
                </div>
                <div className="ml-2 mb-4">
                  <button onClick={()=>dispatch({type:"ADD",payload:{p, id: p.id}})} className="relative py-2 px-3 bg-[#0097ff] rounded-lg  before:content-[''] before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-blue-600/45 hover:before:w-full before:duration-500 before:rounded-lg font-semibold">
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[15%] flex justify-between items-center p-5">
          <button onClick={prevButton} className="py-2 px-1 bg-[#0097ff] rounded-md">Prev</button>
          {pageNumbersList.map((pageNumbers) => {
            return (
              <div key={Math.random() * 2200} className=" px-3">
                <button onClick={()=>handlePageClick(pageNumbers)} className="py-2 px-3 bg-[#0097ff] rounded-md">
                  {pageNumbers}
                </button>
              </div>
            );
          })}
          <button onClick={nextButton} className="py-2 px-1 bg-[#0097ff] rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
