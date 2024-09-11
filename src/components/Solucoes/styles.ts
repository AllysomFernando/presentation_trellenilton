import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const S = {
	Container: styled.div`
		display: flex;
		justify-content: center;
		gap: 15rem;
		align-items: center;
		text-align: center;
		padding: 5rem 0;
		@media (max-width: 768px) {
			flex-direction: row;
			justify-content: center;
			padding-top: 5rem;
			text-align: center;
		}
	`,
	Main: styled.div`
		width: 100%;
		padding: 0 ${theme.main.spacing.x.xl};
		align-items: center;
		justify-content: center;
	`,
	Content: styled.div`
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	`,
	H1: styled.h1`
		font-size: ${theme.main.font.size.xxl};
		color: ${theme.main.colors.secondary};
		@media (max-width: 768px) {
			font-size: ${theme.main.font.size.xl};
		}
	`,
};
