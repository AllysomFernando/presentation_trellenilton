import Cards from "../Cards";
import { TextCards } from "@/components/Cards/text";
import { S } from "./styles";

export function Solucoes() {
	return (
		<S.Container>
			<S.Main>
				<S.Content>
					<h1>Soluções</h1>
					<Cards items={TextCards} />
				</S.Content>
			</S.Main>
		</S.Container>
	);
}
