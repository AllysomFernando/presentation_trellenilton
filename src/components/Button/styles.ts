import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const S = {
	Main: styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ disabled }) =>
			disabled ? colors.grafiti[600] : colors.purple[600]};
		color: ${({ disabled }) =>
			disabled ? colors.grafiti[200] : colors.white[900]};
		width: 100%;
		border-radius: 5px;
		padding: 12px 16px;
		flex-shrink: 1;
		border: none;
		font-family: ${theme.main.font.family.primary};
		font-weight: ${theme.main.font.weight.semiBold};

		&:hover {
			color: ${colors.white[900]};
			background-color: ${colors.charcoal[900]};
		}
	`,
	Outline: styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		border-color: ${({ disabled }) =>
			disabled ? colors.grafiti[300] : colors.purple[700]};
		border-width: 2px;
		color: ${({ disabled }) =>
			disabled ? colors.grafiti[300] : colors.purple[500]};
		width: 100%;
		border-radius: 5px;
		padding: 12px 16px;
		flex-shrink: 1;
		border-style: solid;

		&:hover {
			color: ${colors.charcoal[900]};
			background-color: ${colors.white[900]};
			border-color: ${colors.charcoal[900]};
		}
	`,
	Danger: styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${colors.red[400]};
		color: white;
		width: auto;
		border-radius: 5px;
		padding: 12px 16px;

		&:hover {
			background-color: darkred;
		}
	`,
	Text: styled.span`
		font-size: ${theme.main.font.size.base};
		color: ${colors.white[900]};
		font-family: ${theme.main.font.weight.bold};
	`,
	Ghost: styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${colors.purple[200]};
		width: 100%;
		padding: 4px;
		flex-shrink: 1;
		&:hover {
			color: ${colors.purple[100]};
		}
	`,
};
