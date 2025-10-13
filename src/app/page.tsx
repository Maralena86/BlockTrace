"use client";

import { useState } from "react";
import LampDemo from "@/components/ui/lamp";
import { AddressSearch } from "./AdressSearch";

// exemple de données pour tester
const allTransactions: Record<string, any> = {
	"0x123": { balance: 10 },
	"0xabc": { balance: 20 },
};

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

			{/* <div className="bg-slate-950  flex items-center justify-center h-30">
				<p>Current Address: {currentAddress || "None selected"}</p>
			</div> */}
		</div>
	);
}
