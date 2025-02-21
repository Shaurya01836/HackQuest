import { ethers } from "ethers";
import abi from "../abi/EduChainABI.json";

const contractAddress = "0xEDa3c8f66A50B6a30B3F9566903DcFa48F3498Aa";

export default function Withdraw({ provider }) {
  const withdrawFunds = async () => {
    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.withdraw();
      await tx.wait();
      alert("Funds withdrawn successfully!");
    } catch (error) {
      console.error("Withdrawal failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">🏦 Withdraw Funds</h2>
      <button
        onClick={withdrawFunds}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Withdraw 💸
      </button>
    </div>
  );
}
