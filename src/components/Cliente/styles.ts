import styled from "styled-components";
import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 0;
    background-color: ${theme.main.colors.secondary};
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  `,

  Main: styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    
    @media (min-width: 768px) {
      padding: 0 ${theme.main.spacing.x.xl};
    }
  `,

  Text: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
    
    @media (max-width: 768px) {
      padding-bottom: 2rem;
    }
  `,

  H1: styled.h1`
    color: ${colors.white[900]};
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `,

  H3: styled.h3`
    color: ${colors.white[900]};
    font-weight: ${theme.main.font.weight.semiBold};
    font-size: 1.25rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  `,

  Paragraph: styled.p`
    color: ${colors.white[900]};
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,
};
