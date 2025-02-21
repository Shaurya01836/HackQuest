import React from "react";
import { ethers } from "ethers";

function ConnectWallet({ setProvider, setAccount }) {
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setProvider(provider);
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask to use this feature!");
    }
  };

  return (
    <button
      onClick={connectWalletHandler}
      className="bg-customLightPurple px-4 py-2 rounded-lg font-semibold text-white hover:bg-opacity-90 transition duration-300"
    >
      Connect Wallet
    </button>
  );
}

export default ConnectWallet;
