"use client";
import { useState,useEffect,useReducer } from "react";

// Definiujemy początkowy stan siatki 10x10
const initialGrid = Array(100).fill("");

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, selectedType: action.payload };

    case "PLACE_BUILDING":
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

export default function City() {
    const [showBuildingList, ifBuildingListShown] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    selectedType: "",
    grid: initialGrid,
  });

  // Mapa kolorów dla różnych typów budynków
  const colorMap = {
    "": "bg-gray-300", // Puste pole
    residental: "bg-blue-500",
    lumberjack: "bg-green-600",
    church: "bg-yellow-500",
  };

  return (
    <>
      {/* Siatka 10x10 */}
      <div className="grid grid-cols-10 grid-rows-10 gap-1 w-fit">
        {state.grid.map((cellType, i) => (
          <div
            key={i}
            className={`w-10 h-10 border border-gray-500 ${colorMap[cellType]}`}
            onClick={() => dispatch({ type: "PLACE_BUILDING", index: i })}
          ></div>
        ))}
      </div>
        <button className="" onClick={() => ifBuildingListShown(showBuildingList => !showBuildingList)}>SHOW BUILDING LIST</button>
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
