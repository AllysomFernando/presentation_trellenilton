import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const S = {
	Container: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
        gap: 15rem;
        align-items: center;
        max-width: 1440px;
	`,
	Main: styled.div`
		width: 100%;
		padding: 0 ${theme.main.spacing.x.xl};
	`,
	ButtonConatiners: styled.div`
		display: flex;
		justify-content: center;
		gap: 10rem;
	`,
	Image: styled(Image)`
        width: 1200px;
        height: 100%;    
        border-radius: 5%;
    `,
	ImageContainer: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
        padding: 5rem 5rem;
		width: 30%;
		height: 30%;
	`,
};
