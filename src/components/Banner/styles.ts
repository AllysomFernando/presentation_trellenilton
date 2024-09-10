import styled from "styled-components";
import { motion } from "framer-motion";

export const S = {
	ContainerAnimated: styled(motion.div)`
		width: 100%;
		height: 300px;
		background-color: ${({ theme }) => theme.main.colors.backgroundColor};
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		@media (max-width: 768px) {
			height: 300px;
			width: 300px;
			margin: 0 auto;
		}
	`,
	TextAnimated: styled(motion.div)`
		position: absolute;
		color: ${({ theme }) => theme.main.colors.textColor};
		font-size: 40px;
		font-weight: bold;
		max-width: 75%;
		text-align: center;
		@media (max-width: 768px) {
			font-size: 19px;
		}
	`,
};
