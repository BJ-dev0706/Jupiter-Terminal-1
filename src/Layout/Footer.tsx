import React from "react";
import mark from "../assets/twitter2.svg"


const Footer: React.FC = () => {
  return(
    <div className="bg-black flex lg:flex-row flex-col justify-around lg:py-5 sm:py-2">
        <p className="text-white text-center lg:text-[1vw] sm:text-[2vw]"><a href="#powered-by-solana">cat in a dogs world (MEW)</a></p>
        <a href="https://twitter.com/mewsworld" className="text-center">
            <img src={mark} alt="mark" className="lg:w-[2vw] sm:w-[4vw] w-[2vw]" />
        </a>
    </div>
  )
}

export default Footer;