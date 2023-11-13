import React, { useState } from "react";
import { fecthCEP } from "../app/cepSlice";
import { useDispatch } from "react-redux";
export default function CampDeBusca() {
  const [cep, setcep] = useState();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setcep(event.target.value);
  };
  const handleClick = async () => {
    if (!cep) {
      return alert("Digite um CEP");
    }
    dispatch(fecthCEP(cep));
  };
  return (
    <div
      className={`
    flex 
    justify-center 
    space-x-1
    `}
    >
      <input
        className={`
      border
       border-gray-300 
       rounded-md 
       text-center
       transition
        hover:bg-gray-300
        text-xl
        `}
        type="text"
        name="campBusc"
        id="campBusc"
        placeholder="digete um CEP"
        value={cep}
        onChange={handleChange}
      />

      <button
        className={`
      font-medium
      bg-blue-200
       text-black
        hover:bg-blue-300
         active:bg-red-500 
         p-4 
         rounded-md transition      
       `}
        onClick={handleClick}
      >
        Pesquisar
      </button>
    </div>
  );
}
