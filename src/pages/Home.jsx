import React, { useContext, useState } from 'react'
import Nav from '../components/nav'
import Categories from '../Category'
import Card from '../components/card'
import { food_items } from '../food'
import { BsFilterSquareFill } from 'react-icons/bs'
import { dataContext } from '../context/userContext'

import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast";



function Home() {
  let {cate ,setCate,showCart,setShowCart}=useContext(dataContext)

  let [activeCategory, setActiveCategory] = useState("All")

  function filters(category)
  {
  
    if(category==="All")
    {
      setCate(food_items)
    }
    else{
      let newlist=food_items.filter((item)=>(item.food_category===category.toLowerCase()))
      setCate(newlist)
    }



  }
 

  return (
    <div className='bg-slate-200 w-full h-[100vh]'>
        <Nav/>
    <Toaster position="top-center" reverseOrder={false} />

        
        

      <div className='flex justify-center items-center md:px-8'>
        {
            Categories.map((item)=>{
                return  <div  key={item.id}className='w-[120px] h-[130px] bg-white m-2 shadow-md rounded-2xl flex justify-center flex-col items-center m-2
                text-[20px] font-bold text-gray-500 hover:bg-red-100 cursor-pointer tracking-all duration-200 md:px-8'onClick={()=>filters(item.name)}>
                    
                    {item.icon}
                    {item.name}

        </div>



})
        }

      </div>
     
     {/* <Card/> */}

     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center mt-5'>
  {cate.map((item) => (
    <Card
      key={item.id}
      name={item.food_name}
      image={item.food_image}
      price={item.price}
      id={item.id}
      type={item.food_type}
    />
  ))}
</div>



    <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-2xl p-6 transform transition-transform ${showCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}>
      <header  className='w-[100%0 flex justify-between items-center]'>
        <span className='text-red-400 text-[20px] font-bold'>Order Item</span>
       <span onClick={() =>setShowCart(false)} className="cursor-pointer">
  <RxCross2 className='text-red-400 font-bold text-[30px]' />
</span>
 

          
      </header>
            <Card2/>

     </div>

    
      
    </div>
    

  )
}

export default Home
