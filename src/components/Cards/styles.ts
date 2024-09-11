import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/styles/colors";
export const S = {
	Container: styled.div`
		width: 100%;
		background-color: ${({ theme }) => theme.main.colors.backgroundColor};
	`,
	Main: styled.div`
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
	`,
	CardContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 30px;
		justify-content: center;
		align-items: center;
		width: 100%;
	`,
	Card: styled(motion.div)`
		background-color: ${colors.white[800]};
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 350px;
		width: 100%;
		max-width: 300px;
		margin: 0 auto;

		@media (max-width: 768px) {
			height: 300px;
			padding: 15px;
		}
	`,
	CardImage: styled(motion.img)`
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 10px;
	`,
	CardTitle: styled(motion.h2)`
		margin: 30px 0 5px;
		font-size: 1.5em;
		@media (max-width: 768px) {
			font-size: 1.3em;
		}
	`,
	CardSubtitle: styled(motion.h5)`
		color: gray;
		font-size: 1em;
		margin-bottom: 15px;
		font-weight: ${({ theme }) => theme.main.font.weight.md};
		@media (max-width: 768px) {
			font-size: 1em;
		}
	`,
	ExpandedCard: styled(motion.div)`
		background-color: ${colors.white[800]};
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		width: 40%;
		max-width: 800px;
		margin: 0 auto;
		font-weight: ${({ theme }) => theme.main.font.weight.md};
		@media (max-width: 768px) {
			width: 80%;
			padding: 15px;
		}
	`,
	CloseButton: styled(motion.button)`
		padding: 10px 20px;
		background-color: ${({ theme }) => theme.main.colors.primary};
		color: ${({ theme }) => theme.main.colors.backgroundColor};
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 15px;
	`,
};
