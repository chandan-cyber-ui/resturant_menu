import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { AddItem } from "../redux/cartSlice";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] h-[350px] p-3 bg-white rounded shadow-lg hover:border-2 border-red-300">

      <div className="w-full h-[60%] overflow-hidden">
        <img src={image} alt="" className="rounded object-cover" />
      </div>

      <div className="text-2xl font-semibold mt-4">{name}</div>

      <div className="flex justify-between text-red-400 font-bold mt-2">
        <div>{price}</div>
        <div className="flex items-center gap-2">
          <span className="p-2">{type}</span>
        </div>
      </div>

      {/* BUTTON WORKS NOW */}
      <button
        className="w-full pl-3 pt-1 pb-1 bg-red-500 rounded text-white hover:bg-red-300 font-bold transition-all"
        onClick={() => {
          dispatch(AddItem({ id, name, price, image, type }));
          toast.success("Item added to cart!");
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
