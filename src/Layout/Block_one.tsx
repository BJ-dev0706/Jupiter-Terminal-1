import React from "react";
import bg from "../assets/Img1.png";
import Mark from "../assets/solana.svg";
import BtnGroups from "../contains/LinkButtons";
import JupiterTerminal from "../contains/Jupiter";
import { FormProps } from "../types";
import { SwapMode } from "../types/enums";

const data: FormProps = {
  swapMode: SwapMode.ExactInOrOut,
  initialAmount: '0',
  fixedAmount: false,
  initialInputMint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
  fixedInputMint: false,
  initialOutputMint: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
  fixedOutputMint: false,
  initialSlippageBps: 0
}

const Block_one:React.FC = () => {
  return(
    <div className="relative">
        <img src={bg} alt="background" className="w-full h-[90vw]" />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full">
          <BtnGroups />
          <div className="w-[30%] mt-[5vw] mb-5" >
            <img src={Mark} alt="" className="w-full" />
          </div>
          <JupiterTerminal
            rpcUrl={"https://docs-demo.solana-mainnet.quiknode.pro/"}
            formProps={data}
            simulateWalletPassthrough={false}
            strictTokenList={false}
            defaultExplorer={"Solscan"}
            useUserSlippage={true}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center text-white MytextShadow text-[3vw]">
            <p>i will save them… all of them…</p>
        </div>
    </div>
  )
}

export default Block_one;