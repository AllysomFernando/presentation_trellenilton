import Cards from "../Cards";
import { TextCards } from "@/components/Cards/text";

export function Solucoes() {
	return (
		<div>
			<div>
				<p>Soluções</p>
			</div>
			<div>
				<Cards items={TextCards} />
			</div>
		</div>
	);
}
