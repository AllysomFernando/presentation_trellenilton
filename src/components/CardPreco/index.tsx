import { S } from "./styles";

interface CardPrecoProps {
	title: string;
	description: string;
	price: string;
	isHighlighted?: boolean;
}

export default function CardPreco({
	title,
	description,
	price,
	isHighlighted,
}: CardPrecoProps) {
	return (
		<S.Plan isHighlighted={isHighlighted}>
			<S.PlanTitle>{title}</S.PlanTitle>
			<S.PlanDescription>{description}</S.PlanDescription>
			<S.PlanPrice>{price}</S.PlanPrice>
			<S.PlanButton>Contratar</S.PlanButton>
		</S.Plan>
	);
}
