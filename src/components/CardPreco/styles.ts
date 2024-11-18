import styled from "styled-components";
import { theme } from "@/styles/theme";
import { colors } from "@/styles/colors";

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
	Paragraph: styled.p`
		padding-bottom: 3rem;
	`,
	H3: styled.h3`
		font-weight: ${theme.main.font.weight.semiBold};
		color: ${colors.purple[500]};
	`,
	PlanContainer: styled.div`
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: center;
			gap: 2rem;
		}
	`,
	Plan: styled.div<{ isHighlighted?: boolean }>`
		background-color: ${colors.white[800]};
		border-radius: 10px;
		padding: 2rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 100%;
		max-width: 300px;
		border: ${(props) =>
			props.isHighlighted ? `2px solid ${colors.purple[500]}` : "none"};
	`,
	PlanTitle: styled.h2<{ isHighlighted?: boolean }>`
		font-size: ${(props) =>
			props.isHighlighted ? theme.main.font.size.xxl : theme.main.font.size.lg};
		color: ${(props) =>
			props.isHighlighted ? theme.main.colors.secondary : colors.purple[700]};
	`,
	PlanDescription: styled.p`
		font-size: ${theme.main.font.size.lg};
		color: ${colors.black[900]};
		margin-bottom: 1rem;
	`,
	PlanPrice: styled.h2`
		font-size: ${theme.main.font.size.xxl};
		color: ${colors.purple[900]};
		margin-bottom: 1rem;
		text-align: left;
	`,
	PriceDiv: styled.div`
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 1rem;
	`,
	PlanButton: styled.button<{ isHighlighted?: boolean }>`
		background-color: ${(props) =>
			props.isHighlighted ? theme.main.colors.secondary : colors.white[800]};
		color: ${(props) =>
			props.isHighlighted ? colors.white[800] : colors.purple[700]};
		border: ${(props) =>
			props.isHighlighted ? "none" : `2px solid ${colors.purple[700]}`};
		border-radius: 5px;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-size: ${theme.main.font.size.lg};
		&:hover {
			background-color: ${colors.purple[700]};
			color: ${colors.white[800]};
		}
	`,
	ParagraphDescriptionPrice: styled.p`
		font-size: ${theme.main.font.size.sm};
		color: ${colors.black[900]};
		margin-bottom: 1rem;
		text-align: left;
		padding-top: 2rem;
	`,
	HR: styled.hr`
		border: 0;
		height: 1px;
		background: ${colors.purple[500]};
		margin: 2rem 2rem;
	`,
};
