import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface AddressSearchProps {
	onSearch: (address: string) => void;
	currentAddress: string;
}

export function AddressSearch({
	onSearch,
	currentAddress,
}: AddressSearchProps) {
	return (
		<div className="w-full max-w-3xl ">
			<div className="flex gap-8 ">
				<div className="relative flex-1 ">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
					<Input
						type="text"
						placeholder="Search by address (0x...)"
						className="pl-12 h-12 bg-input-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 font-mono"
						defaultValue={currentAddress}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								onSearch(e.currentTarget.value);
							}
						}}
					/>
				</div>
				<Button
					onClick={(e) => {
						const input =
							e.currentTarget.previousElementSibling?.querySelector("input");
						if (input) onSearch(input.value);
					}}
					className="h-12 px-8  bg-linear-to-r from-cyan-500 to-cyan-800 art-2 hover:shadow-lg hover:shadow-primary/50 transition-all"
				>
					Search
				</Button>
			</div>
		</div>
	);
}
