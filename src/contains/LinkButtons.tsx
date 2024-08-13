import twitter from "../assets/twitter.png";
import Tg from "../assets/Tg.svg";
import Mask_Group from "../assets/Mask_group.svg";
import Subtract from "../assets/Subtract.png";
import one from "../assets/1.svg";
import two from "../assets/2.png";
import okx_dex_logo_white from "../assets/okx_dex_logo_white.svg";
import solscan from "../assets/solscan.png";
import phantom from "../assets/phantom.png";

const BtnGroups = () => {
    return(
        <div className="flex flex-row space-x-5 max-lg:space-x-2">
            <a href="https://twitter.com/mewsworld" target="_blank" className="link" rel="noreferrer">
                <img src={twitter} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://t.me/mewsworld" target="_blank" className="link" rel="noreferrer">
                <img src={Tg} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://www.coingecko.com/en/coins/mew" target="_blank" className="link" rel="noreferrer">
                <img src={Mask_Group} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://coinmarketcap.com/currencies/mew" target="_blank" className="link" rel="noreferrer">
                <img src={Subtract} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://dexscreener.com/solana" target="_blank" className="link" rel="noreferrer">
                <img src={one} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer" target="_blank" className="link" rel="noreferrer">
                <img src={two} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://www.okx.com/web3/dex-swap" target="_blank" className="link" rel="noreferrer">
                <img src={okx_dex_logo_white} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://solscan.io/token" target="_blank" className="link" rel="noreferrer">
                <img src={solscan} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
            <a href="https://phantom.app" target="_blank" className="link" rel="noreferrer">
                <img src={phantom} alt="" className="hover:scale-110 transition duration-200"/>
            </a>
        </div>
    )
}

export default BtnGroups;