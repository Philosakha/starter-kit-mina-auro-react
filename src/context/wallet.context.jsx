// @/context/wallet.context.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const connectWallet = () => {
    // Logic to connect the wallet
    setWalletConnected(true);
  };

  const disconnectWallet = () => {
    // Logic to disconnect the wallet
    setWalletConnected(false);
  };

  return (
    <WalletContext.Provider value={{ isWalletConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
