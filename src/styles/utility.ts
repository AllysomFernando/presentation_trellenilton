import styled from "styled-components";
import { theme } from "./theme";

export const Utility = {
	PyBase: styled.div`
		padding-block: ${theme.main.spacing.y.base};
	`,
	PyLg: styled.div`
		padding-block: ${theme.main.spacing.y.lg};
	`,
	PyXl: styled.div`
		padding-block: ${theme.main.spacing.y.xl};
	`,
	PxLg: styled.div`
		padding-inline: ${theme.main.spacing.x.lg};
	`,
	DesktopOnly: styled.div`
		display: none;
	`,
	EvenColumns: styled.div`
		display: grid;
		gap: ${theme.responsive.gap.base};
	`,
};
