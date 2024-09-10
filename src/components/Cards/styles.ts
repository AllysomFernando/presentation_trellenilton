import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const S = {
	CardContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 20px;
		padding: 20px;
	`,
	Card: styled(motion.div)`
		background-color: ${({ theme }) => theme.main.colors.backgroundColor};
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`,
	CardImage: styled(motion.img)`
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 10px;
	`,
	CardTitle: styled(motion.h2)`
		margin: 15px 0 5px;
		font-size: 1.5em;
	`,
	CardSubtitle: styled(motion.h5)`
		color: gray;
		font-size: 1em;
		margin-bottom: 10px;
	`,
	ExpandedCard: styled(motion.div)`
		background-color: ${({ theme }) => theme.main.colors.backgroundColor};
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	`,
	CloseButton: styled(motion.button)`
		padding: 10px 20px;
		background-color: #ff5252;
		color: ${({ theme }) => theme.main.colors.backgroundColor};
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 15px;
	`,
};
