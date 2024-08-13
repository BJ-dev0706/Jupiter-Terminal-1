import React from "react";
import bg from "../assets/img3.png";

const Block_two: React.FC = () => {
  return(
    <div className="relative">
        <img src={bg} alt="background" className="w-full" />
        <div className="absolute w-full left-0 bottom-0 text-center text-white MytextShadow text-[3vw]">
            <p>it’s the dawn of a new era… </p>
        </div>
    </div>
  )
}

export default Block_two;