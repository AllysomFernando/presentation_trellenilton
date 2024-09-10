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
		text-align: left;
		@media (max-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			padding-top: 5rem;
			text-align: left;
		}
	`,
	Main: styled.div`
		width: 100%;
		padding: 0 ${theme.main.spacing.x.xl};
	`,
	Content: styled.div`
		display: flex;
		flex-direction: column;
		gap: 2rem;
		
	`,
};
