import { S } from "./styles";
import { useEffect, useState } from "react";

export default function Banner() {
	const wordList = [
		"Hoje eu vou conquistar o mundo, uma tarefa de cada vez.",
		"Prioridades definidas, foco total!",
		"Um dia de cada vez, uma tarefa de cada vez. Vamos lá!",
		"Mais perto do meu objetivo a cada tarefa concluída.",
		"Pausa rápida para celebrar mais uma meta alcançada!",
		"Respirar fundo e continuar, o sucesso está mais próximo do que parece.",
		"Desafios são apenas oportunidades disfarçadas.",
		"Missão cumprida! Amanhã tem mais.",
		"Satisfação em ver tudo organizado e pronto para o dia seguinte.",
		"Agradeço por mais um dia produtivo!",
		"Descanso merecido, corpo e mente prontos para novos desafios.",
	];
	const [currentWord, setCurrentWord] = useState(0);

	useEffect(() => {
		const shuffledWordList = [...wordList].sort(() => Math.random() - 3);
		const interval = setInterval(() => {
			setCurrentWord((prevWord) => (prevWord + 1) % shuffledWordList.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -50 },
	};

	return (
		<S.ContainerAnimated
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<S.TextAnimated
				key={currentWord}
				variants={textVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				{wordList[currentWord]}
			</S.TextAnimated>
		</S.ContainerAnimated>
	);
}
