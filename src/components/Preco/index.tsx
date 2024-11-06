import { S } from "./styles";

export default function Preco() {
	return (
		<S.Container>
			<S.Main>
				<S.H3>Planos e preços</S.H3>
				<h1>Nossos planos</h1>
				<S.PlanContainer>
					<S.Plan>
						<S.PlanTitle>Básico</S.PlanTitle>
						<S.PlanDescription>
							Plano básico para quem está começando
						</S.PlanDescription>
						<S.PlanPrice>R$ 50,00</S.PlanPrice>
						<S.PlanButton>Contratar</S.PlanButton>
					</S.Plan>
					<S.Plan>
						<S.PlanTitle>Premium</S.PlanTitle>
						<S.PlanDescription>
							Plano premium para quem quer mais resultados
						</S.PlanDescription>
						<S.PlanPrice>R$ 100,00</S.PlanPrice>
						<S.PlanButton>Contratar</S.PlanButton>
					</S.Plan>
					<S.Plan>
						<S.PlanTitle>Empreserial</S.PlanTitle>
						<S.PlanDescription>
							Plano empresarial para quem quer destacar a sua empresa
						</S.PlanDescription>
						<S.PlanPrice>R$ 200,00</S.PlanPrice>
						<S.PlanButton>Contratar</S.PlanButton>
					</S.Plan>
				</S.PlanContainer>
			</S.Main>
		</S.Container>
	);
}
