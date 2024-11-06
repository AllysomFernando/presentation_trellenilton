import { useState } from "react";
import { S } from "./styles";
import CardPreco from "../CardPreco";

export default function Preco() {
	const [highlightedPlan, setHighlightedPlan] = useState("Premium");

	return (
		<S.Container>
			<S.Main>
				<S.H3>Planos e preços</S.H3>
				<h1>Nossos planos</h1>
				<S.PlanContainer>
					<CardPreco
						title="Básico"
						description="Plano básico para quem está começando"
						price="R$ 50,00"
						isHighlighted={highlightedPlan === "Básico"}
					/>
					<CardPreco
						title="Premium"
						description="Plano premium para quem quer mais resultados"
						price="R$ 100,00"
						isHighlighted={highlightedPlan === "Premium"}
					/>
					<CardPreco
						title="Empresarial"
						description="Plano empresarial para quem quer destacar a sua empresa"
						price="R$ 200,00"
						isHighlighted={highlightedPlan === "Empresarial"}
					/>
				</S.PlanContainer>
			</S.Main>
		</S.Container>
	);
}
