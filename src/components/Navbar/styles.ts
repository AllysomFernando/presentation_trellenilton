import { theme } from "@/styles/theme";
import styled from "styled-components";

export const S = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		--max-width: 680px;
		width: min(var(--max-width), 100% - var(--px-lg) * 2);
		margin-inline: auto;
	`,
	Nav: styled.nav`
		display: flex;
		align-items: center;
		gap: ${theme.responsive.gap.base};
		justify-content: space-between;
	`,
	UlMaster: styled.ul`
		display: flex;
		gap: ${theme.responsive.gap.lg};
	`,
};
