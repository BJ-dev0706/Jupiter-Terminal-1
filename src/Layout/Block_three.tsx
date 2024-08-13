import React from "react";
import bg from "../assets/img4.jpg";

const Block_three:React.FC = () => {
  return(
    <div className="relative">
        <img src={bg} alt="background" className="w-full h-[50vw] "/>
        <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center">
          <div className=" text-[3vw] text-center text-white">
            <p>Total Supply:</p>
            <p>88,888,888,888</p>
            <p className="my-10">90% Burned LP</p>
            <p>10% Airdrop</p>
            <p>to the Solana community</p>
          </div>
        </div>
    </div>
  )
}

export default Block_three;