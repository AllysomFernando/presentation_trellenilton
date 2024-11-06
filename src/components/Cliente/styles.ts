import styled from "styled-components";
import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";

export const S = {
	Container: styled.div`
		display: flex;
		justify-content: center;
		gap: 15rem;
		align-items: center;
		text-align: center;
		padding: 5rem 0;
		background-color: ${colors.purple[400]};
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
	Paragraph: styled.p`
		padding-bottom: 3rem;
	`,
	H3: styled.h3`
		color: ${colors.white[900]};
		font-weight: ${theme.main.font.weight.semiBold};
	`,
};
