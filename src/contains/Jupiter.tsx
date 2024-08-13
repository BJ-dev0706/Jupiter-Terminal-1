import React, { useCallback, useEffect, useState } from 'react';
import { DEFAULT_EXPLORER, FormProps } from '../types/index';
import { useUnifiedWalletContext, useWallet } from '@jup-ag/wallet-adapter';

const JupiterTerminal = (props: {
  rpcUrl: string;
  formProps: FormProps;
  simulateWalletPassthrough: boolean;
  strictTokenList: boolean;
  defaultExplorer: DEFAULT_EXPLORER;
  useUserSlippage: boolean;
}) => {
  const { rpcUrl, formProps, simulateWalletPassthrough, strictTokenList, defaultExplorer, useUserSlippage } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const passthroughWalletContextState = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  const launchTerminal = useCallback(async () => {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: rpcUrl,
      formProps,
      enableWalletPassthrough: simulateWalletPassthrough,
      passthroughWalletContextState: simulateWalletPassthrough ? passthroughWalletContextState : undefined,
      onRequestConnectWallet: () => setShowModal(true),
      strictTokenList,
      defaultExplorer,
      useUserSlippage
    });
  }, [
    defaultExplorer,
    formProps,
    passthroughWalletContextState,
    rpcUrl,
    setShowModal,
    simulateWalletPassthrough,
    strictTokenList,
    useUserSlippage,
  ]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;
    
    if (!isLoaded || !window.Jupiter.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter.init));
      }, 500);
    }

    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter.init)) {
        launchTerminal();
      }
    }, 200);
  }, [isLoaded, simulateWalletPassthrough, props, launchTerminal]);

  // To make sure passthrough wallet are synced
  useEffect(() => {
    if (!window.Jupiter.syncProps) return;
    window.Jupiter.syncProps({ passthroughWalletContextState });
  }, [passthroughWalletContextState, props]);

  return (
    <div className="h-[500px] w-full rounded-2xl text-white flex flex-col items-center p-2 lg:p-4 mb-4 overflow-clip mt-9 z-30">
      {!isLoaded ? (
            <div className="h-full w-full animate-pulse bg-white/10 mt-4 lg:mt-0 lg:ml-4 flex items-center justify-center rounded-xl">
              <p className="">Loading...</p>
            </div>
          ) : null}

          <div
            id="integrated-terminal"
            className={`flex h-full lg:w-[30%] w-[40%] overflow-auto justify-center px-[5vw] py-[3vh] border-4 bg-gradient-to-r from-[#cc37f6] via-[#818ed3] to-[#3adeb1] border-[#ff00f8] rounded-xl ${
              !isLoaded ? 'hidden' : ''
            }`}
          />
    </div>
  );
};

export default JupiterTerminal;
