import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { BsCupHotFill } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
 const Categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:2,
        name:"breakfast",
         icon:<MdFreeBreakfast  className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:3,
        name:"soups",
        icon:<BsCupHotFill className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:4,
        name:"Pizza",
         icon:<GiFullPizza className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:5,
        name:"Main_course",
       icon:<MdFoodBank  className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:6,
        name:"burger",
       icon:<FaHamburger className="h-[60px] w-[60px]  text-red-500"/>
    },
      {
        id:7,
        name:"Pasta",
 icon:<IoFastFood  className="h-[60px] w-[60px]  text-red-500"/>
    }
]
export default Categories