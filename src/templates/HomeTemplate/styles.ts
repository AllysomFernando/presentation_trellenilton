import { theme } from "@/styles/theme";
import styled from "styled-components";

export const S = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
	`,
	Main: styled.div`
		width: 100%;
		max-width: 1440px;
		padding: 0 ${theme.main.spacing.x.xl};
		
	`,
	Header: styled.header``,
};
