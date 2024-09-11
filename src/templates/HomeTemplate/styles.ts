import { theme } from "@/styles/theme";
import styled from "styled-components";

export const S = {
	Container: styled.div`
		max-width: 1920px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`,
	Main: styled.div`
		width: 100%;
		padding: 0 ${theme.main.spacing.x.xl};
		align-items: center;
		justify-content: center;
	`,
};
