import React, { useState } from "react";
import bg from "../assets/aa.png";
import logo from "../assets/Logo.svg";
import NavBar from "../contains/NavBar";

const Header: React.FC = () => {
    const [flag, setFalg] = useState(false);
    const toggle = () => {
        let toggle:any = document.getElementById("toggle");        
        toggle.classList.toggle("toggle");
        setFalg(!flag);
    };
  return(
    <div className="relative">
        <img src={bg} alt="background" className="w-full h-[50vw]" />
        <div className="absolute top-0 left-0 w-full h-full">
            <img src={logo} alt="LOGO" className="absolute w-[5vw] max-[1024px]:w-[7vw] max-[768px]:w-[8vw] top-[30px] left-[30px] max-[768px]:left-[20px] max-[768px]:top-[20px]" />
            <div className="fixed top-[30px] right-[30px] p-3 max-[768px]:right-[15px] max-[768px]:top-[15px] z-50">
                <div className="cursor-pointer w-full bg-red z-10" id="toggle" onClick={toggle}>
                    <div className="bg-white w-8 h-1 my-1 right-rotate transition duration-300"></div>
                    <div className="bg-white w-8 h-1 my-1 middle_hidden transition duration-300"></div>
                    <div className="bg-white w-8 h-1 my-1 left-rotate transition duration-300"></div>
                </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <h1 className="text-white mx-auto font-black text-[4vw] mt-[30px] MytextShadow">
                    cat in a dogs world
                </h1>
                <div className="mt-[5vw] text-[10vw] text-white MyBigShadow italic">
                    HIRE
                </div>
            </div>
            
            <p className="MytextShadow text-[3vw] text-white absolute left-1/2 -translate-x-1/2 bottom-[5%] w-full text-center">
                for too long dogs have ruled the world…
            </p>
            <NavBar view = {flag} />
        </div>
    </div>
  )
}

export default Header;