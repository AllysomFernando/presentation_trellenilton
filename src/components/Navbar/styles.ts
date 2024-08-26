import { theme } from "@/styles/theme";
import { Utility } from "@/styles/utility";
import styled from "styled-components";

export const styles = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		--max-width: 680px;
		width: min(var(--max-width), 100% - var(--px-lg) * 2);
		margin-inline: auto;
	`,
	Main: styled.div`
		display: flex;
		gap: ${theme.responsive.gap.base};
	`,
};
