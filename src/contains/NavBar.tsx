import React from "react";
import logo from "../assets/Logo.svg";

interface NavBarProps {
    view: boolean;
}

const NavBar:React.FC<NavBarProps> = ({view}) => {
    return(
        <div className={`w-[400px] bg-[#333] fixed top-[20px] right-0  z-40 ${view ? "block" : "hidden"} transition duration-150`}>
            <ul className="text-center pt-24 h-screen text-2xl text-white" id="menu">
              <img src={logo} className="w-[5vw] mx-auto" alt=""/>
              <li className="my-8"><a href="#powered-by-solana">Jupiter</a></li>
              <li className="my-8"><a target="_blank" href="https://birdeye.so/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5?chain=solana" rel="noreferrer">Birdeye</a></li>
              <li className="my-8"><a target="_blank" href="https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5" rel="noreferrer">Solscan</a></li>
              <li className="my-8"><a href="#powered-by-solana">Get started</a></li>
            </ul>
        </div>
    )
}

export default NavBar;