import styled from "styled-components";
import Image from "next/image";
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
	ImageContainer: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-top: 10px;
		max-height: 600px;
	`,
	Image: styled(Image)`
		width: 100%;
		height: 650px;
		border-radius: 1%;
	`,
	TextAnimated: styled(motion.div)`
		position: absolute;
		color: ${({ theme }) => theme.main.colors.textColor};
		font-size: 40px;
		font-weight: bold;
		@media (max-width: 768px) {
			font-size: 19px;
		}
	`,
};
