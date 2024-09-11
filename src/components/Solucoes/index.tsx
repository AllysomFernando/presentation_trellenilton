import Cards from "../Cards";
import { TextCards } from "@/components/Cards/text";
import { S } from "./styles";
import { Utility } from "@/styles/utility";

export function Solucoes() {
	return (
		<S.Container>
			<S.Main>
				<S.Content>
					<S.H1>Soluções</S.H1>
					<Cards items={TextCards} />
				</S.Content>
			</S.Main>
		</S.Container>
	);
}
