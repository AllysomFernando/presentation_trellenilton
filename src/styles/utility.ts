import styled from "styled-components";
import { theme } from "./theme";
import Image from "next/image";

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

		@media (width >= ${theme.device.lg}) {
			display: initial;
		}
	`,
	EvenColumns: styled.div`
		display: grid;
		gap: ${theme.responsive.gap.base};

		@media (width >= ${theme.device.lg}) {
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
		}
	`,
	ItemCenter: styled.div`
		align-items: center;
	`,
	JustifyBetween: styled.div`
		justify-content: space-between;
	`,
	Flex: styled.div`
		display: flex;
		gap: ${theme.responsive.gap.base};
	`,
	Grid: styled.div`
		display: grid;
	`,
	Gap1: styled.div``,
	GapOneHalf: styled.div`
		gap: 1.5rem;
	`,
	BtnWrapper: styled.div`
		cursor: pointer;
		padding: 2px;
	`,
	Container: styled.header`
		--max-width: 680px;
		width: min(var(--max-width), 100% - var(--px-lg) * 2);
		margin-inline: auto;

		@media (width >= ${theme.device.lg}) {
			--max-width: 1050px;
		}
	`,
	Image: styled(Image)`
		max-width: 100%;
		display: inline-block;
	`,
	ContainerMobile: styled.div`
		--max-width: 680px;
		width: min(var(--max-width), 100% - var(--px-lg) * 2);
		margin-inline: auto;
		display: flex;
		@media (width >= ${theme.device.lg}) {
			--max-width: 1050px;
		}
	`,
};
