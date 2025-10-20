"use client";

import { useState } from "react";
import LampDemo from "@/components/ui/lamp";
import { AddressSearch } from "./AdressSearch";
import {
  NetworkEthereum,
  NetworkIcon,
  TokenBTC,
  TokenIcon,
} from "@web3icons/react";
import Flow from "@/components/reactflow/Flow";

// exemple de données pour tester
const allTransactions: Record<string, any> = {
  "0x123": { balance: 10 },
  "0xabc": { balance: 20 },
};

const networks = [
  "zksync",
  "polygon",
  "ethereum",
  "binance-smart-chain",
  "gnosis",
  "optimism",
  "linea",
];

export default function Home() {
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSearch = (address: string) => {
    if (allTransactions[address]) {
      setCurrentAddress(address);
      setMessage("Address loaded ✅");
    } else {
      setMessage("Address not found ❌");
    }
  };

  const tokenSymbol = "BTC";
  const networkName = "ethereum";

  return (
    <div className="font-sans min-h-screen  text-white">
      <LampDemo />

      <div className="flex justify-center  flex-col items-center mb-10">
        <AddressSearch
          onSearch={handleSearch}
          currentAddress={currentAddress}
        />
        {message && (
          <p className="mt-2 text-center text-lg text-cyan-100">{message}</p>
        )}
      </div>
      <Flow />

      <div className="flex justify-center gap-2 p-10">
        {networks.map((network, index) => (
          <NetworkIcon
            key={index}
            name={network}
            size={32}
            variant="branded"
            className="bg-white rounded-2xl"
          />
        ))}
      </div>
      {/* <div className="bg-slate-950  flex items-center justify-center h-30">
				<p>Current Address: {currentAddress || "None selected"}</p>
			</div> */}
    </div>
  );
}
