import React, { useState } from "react";
import { Wallet } from "lucide-react";
import Navbar from "../components/Navbar";
import { ExternalLink } from "lucide-react";

function Docs() {
  const [activeSection, setActiveSection] = useState("Installing MetaMask");

  const renderContent = () => {
    switch (activeSection) {
      case "Installing MetaMask":
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Installing MetaMask
            </h1>
            <p className="text-gray-300 mb-8">
              MetaMask is a crypto wallet & gateway to blockchain apps. Here's
              how to install it:
            </p>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 mb-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Step 1: Install Browser Extension
              </h2>
              <p className="text-gray-300 mb-4">
                Visit the official MetaMask website and download the extension
                for your browser.
              </p>
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                Download MetaMask <ExternalLink size={16} />
              </a>
            </div>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Step 2: Create a Wallet
              </h2>
              <p className="text-gray-300 mb-3">
                Follow the setup process to create your new wallet. Make sure
                to:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Save your Secret Recovery Phrase securely</li>
                <li>Create a strong password</li>
                <li>Never share your recovery phrase with anyone</li>
              </ul>
            </div>
          </>
        );
      case "Adding EDU Chain":
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Adding EDU Chain
            </h1>
            <p className="text-gray-300 mb-8">
              To add EDU Chain to your MetaMask wallet, follow these steps:
            </p>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Step 1: Open MetaMask
              </h2>
              <p className="text-gray-300 mb-4">
                Click the network dropdown at the top and select "Add Network".
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Step 2: Enter Network Details
              </h2>
              <p className="text-gray-300 mb-4">
                Fill in the following details:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Network Name: EDU Chain</li>
                <li>New RPC URL: https://rpc.educhain.network</li>
                <li>Chain ID: 12345</li>
                <li>Currency Symbol: EDU</li>
                <li>Block Explorer URL: https://explorer.educhain.network</li>
              </ul>
            </div>
          </>
        );
      case "Getting Test Tokens":
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Getting Test Tokens
            </h1>
            <p className="text-gray-300 mb-8">
              Instructions for obtaining test tokens are as follows:
            </p>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 mb-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Step 1: Go To HACKQUEST Website
              </h2>
              <p className="text-gray-300 mb-4">
                Visit the official HACKQUEST website and Choose a Faucet.
              </p>
              <a
                href="https://www.hackquest.io/faucets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                Faucet Section of HACKQUEST <ExternalLink size={16} />
              </a>
            </div>

            <div className="border border-purple-500 rounded-lg p-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-xl font-semibold text-customBlue mb-2">
                Step 2: Choose a Faucet and Click on that
              </h2>
              <p className="text-gray-300 mb-3">
                Follow the steps to get Free Testnet Faucet. Make sure to:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Enter your ETH Address (wallet Address)</li>
                <li>Click on Request Button</li>
                <li>It can only be collected once every 24 hours!</li>
              </ul>
            </div>
          </>
        );

      case "Making Transactions":
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Making Transactions
            </h1>
            <p className="text-gray-300 mb-8">
              With Cryptify, you can make secure and seamless transactions using
              different methods.
            </p>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 mb-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Transaction via Wallet Address or Username
              </h2>
              <p className="text-gray-300 mb-4">
                Send crypto using the recipient's wallet address or Username:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Open the transfer section in Cryptify.</li>
                <li>
                  Enter the recipient's wallet address or Username carefully.
                </li>
                <li>Specify the amount you want to transfer.</li>
                <li>Include remarks for transaction reference.</li>
                <li>Confirm details and complete the transaction securely.</li>
              </ul>
            </div>
          </>
        );
      case "Register as User":
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Register as User
            </h1>
            <p className="text-gray-300 mb-8">
              You can register your self in Cryptify as a User by following
              these steps.
            </p>
            <div className="border border-purple-500 rounded-lg p-4 md:p-6 mb-6 bg-purple-900 bg-opacity-30 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-customBlue mb-2">
                Register as User
              </h2>
              <p className="text-gray-300 mb-4">
                Go to the profile section in the Cryptify
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Connect MetaMask</li>
                <li>Enter your username.</li>
                <li>Click on the register button.</li>
                <li>Congratulations you are registered as user.</li>
              </ul>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-customDark mt-20 border-t-2 border-customPurple border-opacity-25 min-h-screen">
        {/* Sidebar */}
        <div className="bg-customDarkpurple lg:h-screen w-full lg:w-80 border-b-2 lg:border-b-0 lg:border-r-2 border-customPurple border-opacity-25 flex flex-row lg:flex-col gap-5 py-5 px-4 overflow-x-auto lg:overflow-y-auto">
          <div className="flex items-center justify-center gap-2 w-full lg:justify-start">
            <Wallet
              size={30}
              className="text-purple-500 p-1 rounded-md border-b-2 border-purple-500"
            />
            <h1 className="font-bold text-lg lg:text-xl text-white">
              EDU Chain Docs
            </h1>
          </div>
          <div className="flex lg:flex-col items-start w-full gap-2 text-white">
            {[
              "Installing MetaMask",
              "Adding EDU Chain",
              "Getting Test Tokens",
              "Making Transactions",
              "Register as User",
            ].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`${
                  activeSection === section
                    ? "bg-customBlue bg-opacity-70"
                    : "hover:bg-customBlue2 hover:bg-opacity-30"
                } px-3 py-2 rounded-md w-full text-left font-semibold text-sm md:text-base`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full px-5 md:px-10 py-6 text-white">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default Docs;
