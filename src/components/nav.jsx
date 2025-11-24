import React, { useContext, useEffect } from 'react'
import { MdMenu } from 'react-icons/md';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { dataContext } from '../context/userContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


function Nav() {
  let {input ,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)

  useEffect(()=>{
    let newList=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    
    setCate(newList)
  },[input])
  //  let item=useSelector(state=>state.cart)



  return (
    <div className='w-full h-[100px] flex justify-around items-center px-5 md:px-8'>

       <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-2xl  shadow-xl'>
        <MdFastfood  className='w-[30px] h-[30px] text-red-500 ' />
       </div>


       {/* search section  */}
      <div className='w-[40%] h-[40px] bg-white flex p-2  items-center rounded-2xl shadow-md'>
         <FaSearch className='text-red-500 text-[16px] m-2 m:w-[70%] text-[20px]'/>
       <form action="" className='m-5 w-[100%] 'onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='search Items...' className='w-[100%] outline-none text-[20px]'onChange={(e)=>setInput(e.target.value)} value={input}/>
       </form>
      </div>


       <div  className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-2xl ml-[20px] shadow-xl relative'onClick={()=>{
        setShowCart(true)
       }}>
        <span className='absolute top-0 right-3 text-red-500 font-bold text-[18px]'>{0}</span>
            <IoCart className='w-[30px] h-[30px] text-red-500'/>
       </div>

   

    </div>
  )
}

export default Nav
