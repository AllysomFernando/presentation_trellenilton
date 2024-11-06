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
	Plan: styled.div`
		background-color: ${colors.white[900]};
		border-radius: 10px;
		padding: 2rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 100%;
		max-width: 300px;
	`,
	PlanTitle: styled.h2`
		font-size: ${theme.main.font.size.lg};
		color: ${colors.purple[700]};
		margin-bottom: 1rem;
	`,
	PlanDescription: styled.p`
		font-size: ${theme.main.font.size.lg};
		color: ${colors.black[900]};
		margin-bottom: 1rem;
	`,
	PlanPrice: styled.h3`
		font-size: ${theme.main.font.size.xl};
		color: ${colors.purple[900]};
		margin-bottom: 1rem;
	`,
	PlanButton: styled.button`
		background-color: ${colors.purple[600]};
		color: ${colors.white[900]};
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-size: ${theme.main.font.size.lg};
		&:hover {
			background-color: ${colors.purple[700]};
		}
	`,
};
