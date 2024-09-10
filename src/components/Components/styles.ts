import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const S = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 15rem;
		align-items: center;
		padding: 2rem;
		text-align: center;
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			padding: 4rem;
			text-align: left;
		}
	`,
	Main: styled.div`
		width: 100%;
		padding: 0 ${theme.main.spacing.x.xl};
	`,
	ButtonContainers: styled.div`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;

		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: center;
			gap: 2rem;
		}
	`,
	Image: styled(Image)`
		width:  350px;
		height: 100%;
		border-radius: 5%;

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
		width: 100%;

		@media (min-width: 768px) {
			width: 40%;
		}
	`,
};
