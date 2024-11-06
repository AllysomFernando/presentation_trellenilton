import { S } from "./styles";

interface CardPrecoProps {
	title: string;
	description: string;
	price: string;
	precoDescricao?: string;
	isHighlighted?: boolean;
}

export default function CardPreco({
	title,
	description,
	price,
	precoDescricao,
	isHighlighted,
}: CardPrecoProps) {
	return (
		<S.Plan isHighlighted={isHighlighted}>
			<S.PlanTitle>{title}</S.PlanTitle>
			<S.PlanDescription>{description}</S.PlanDescription>
			<S.PriceDiv>
				<S.PlanPrice>{price}</S.PlanPrice>
				<S.ParagraphDescriptionPrice>
					{precoDescricao}
				</S.ParagraphDescriptionPrice>
			</S.PriceDiv>
			<S.HR />
			<S.PlanButton>Contratar</S.PlanButton>
		</S.Plan>
	);
}
