import { useState } from "react";
import { S } from "./styles";
import { AnimatePresence } from "framer-motion";

type CardProps = {
	id: number;
	title: string;
	subtitle: string;
	text: string;
	img: string;
};

interface CardListProps {
	items: CardProps[];
}

export default function Cards({ items }: CardListProps) {
	const [selectedId, setSelectedId] = useState<number | null>(null);

	return (
		<S.Container>
			<S.Main>
				<S.CardContainer>
					{items.map((item) => (
						<S.Card
							layoutId={item.id.toString()}
							key={item.id}
							onClick={() => setSelectedId(item.id)}
						>
							<S.CardImage
								src={item.img}
								alt={item.title}
								layoutId={`image-${item.id}`}
							/>
							<S.CardTitle layoutId={`title-${item.id}`}>
								{item.title}
							</S.CardTitle>
							<S.CardSubtitle layoutId={`subtitle-${item.id}`}>
								{item.subtitle}
							</S.CardSubtitle>
						</S.Card>
					))}
				</S.CardContainer>

				<AnimatePresence>
					{selectedId && (
						<S.ExpandedCard layoutId={selectedId.toString()}>
							<S.CardImage
								src={items.find((item) => item.id === selectedId)?.img}
								alt={items.find((item) => item.id === selectedId)?.title}
								layoutId={`image-${selectedId}`}
							/>
							<S.CardTitle layoutId={`title-${selectedId}`}>
								{items.find((item) => item.id === selectedId)?.title}
							</S.CardTitle>
							<S.CardSubtitle layoutId={`subtitle-${selectedId}`}>
								{items.find((item) => item.id === selectedId)?.text}
							</S.CardSubtitle>
							<S.CloseButton onClick={() => setSelectedId(null)}>
								Fechar
							</S.CloseButton>
						</S.ExpandedCard>
					)}
				</AnimatePresence>
			</S.Main>
		</S.Container>
	);
}
