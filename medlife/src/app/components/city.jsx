"use client";
import { useState,useEffect,useReducer } from "react";
import BuildingDetails from "./building_details";
// Definiujemy początkowy stan siatki 10x10
const initialGrid = Array(100).fill("");

export default function City() {
  const [money,setMoney] = useState(1000)
  const [manpower,setManpower] = useState(1000)
  const [food,setFood] = useState(1000)
  const [wood,setWood] = useState(1000)
    const [showBuildingList, ifBuildingListShown] = useState(false)
    const reducer = (state, action) => {
      switch (action.type) {
        case "SET_TYPE":
          return { ...state, selectedType: action.payload };
    
        case "PLACE_BUILDING":
          setMoney(money-100)
          setWood(wood-100)
          return {
            ...state,
            grid: state.grid.map((cell, index) =>
              index === action.index ? state.selectedType : cell
            ),
          };
    
        default:
          return state;
      }
    };
  const [state, dispatch] = useReducer(reducer, {
    selectedType: "",
    grid: initialGrid,
  });
  const buildings_cost = {
    residental: {wood:20,money:10},
    lumberjack: {wood:0,money:100},
    church: {wood:350,money:700}
  }
  // Mapa kolorów dla różnych typów budynków
  const colorMap = {
    "": "bg-gray-300", // Puste pole
    residental: "bg-blue-500",
    lumberjack: "bg-green-600",
    church: "bg-yellow-500",
  }
  return (
    <>
      {/* Siatka 10x10 */}
      <div className="fixed top-15 right-80">Money:{money}<br></br>Manpower:{manpower}<br></br>Food:{food}<br></br>Wood:{wood}</div>
      <div className="grid grid-cols-10 grid-rows-10 gap-1 w-fit my-24">
        {state.grid.map((cellType, i) => (
          <div
            key={i}
            className={`w-10 h-10 border border-gray-500 ${colorMap[cellType]}`}
            onClick={() => dispatch({ type: "PLACE_BUILDING", index: i })}
          ></div>
        ))}
      </div>
      <div onClick={() => ifBuildingListShown(showBuildingList => !showBuildingList)}>
        <img src="/mlotek-cropped.png" width="100" className="cursor-pointer hover:scale-105"/>
      </div>
      {showBuildingList && (      
        <div className="grid grid-cols-3 gap-1 w-fit mt-4">
        <div
          className="w-10 h-10 bg-blue-500 border border-gray-500 cursor-pointer"
          onClick={() => dispatch({ type: "SET_TYPE", payload: "residental" })}
        ></div>
        <div
          className="w-10 h-10 bg-green-600 border border-gray-500 cursor-pointer"
          onClick={() => dispatch({ type: "SET_TYPE", payload: "lumberjack" })}
        ></div>
        <div
          className="w-10 h-10 bg-yellow-500 border border-gray-500 cursor-pointer"
          onClick={() => dispatch({ type: "SET_TYPE", payload: "church" })}
        ></div>
      </div>)}
    </>
  );
}
