import styled from "styled-components";
import { theme } from "@/styles/theme";
import { colors } from "@/styles/colors";

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 1rem;
    
    @media (max-width: 768px) {
      padding: 2rem 1rem;
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

  Content: styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
      gap: 1rem;
    }
  `,

  Paragraph: styled.p`
    padding-bottom: 2rem;
    
    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  `,

  H3: styled.h3`
    font-weight: ${theme.main.font.weight.semiBold};
    color: ${colors.purple[500]};
    font-size: 1.25rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  `,

  PlanContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
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
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 300px;
    
    @media (max-width: 768px) {
      max-width: 100%;
      padding: 1.25rem;
    }
  `,

  PlanTitle: styled.h2`
    font-size: ${theme.main.font.size.lg};
    color: ${colors.purple[700]};
    margin-bottom: 0.75rem;
    
    @media (max-width: 768px) {
      font-size: calc(${theme.main.font.size.lg} * 0.9);
    }
  `,

  PlanDescription: styled.p`
    font-size: ${theme.main.font.size.lg};
    color: ${colors.black[900]};
    margin-bottom: 0.75rem;
    
    @media (max-width: 768px) {
      font-size: calc(${theme.main.font.size.lg} * 0.9);
    }
  `,

  PlanPrice: styled.h3`
    font-size: ${theme.main.font.size.xl};
    color: ${colors.purple[900]};
    margin-bottom: 0.75rem;
    
    @media (max-width: 768px) {
      font-size: calc(${theme.main.font.size.xl} * 0.9);
    }
  `,

  PlanButton: styled.button`
    background-color: ${colors.purple[600]};
    color: ${colors.white[900]};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: ${theme.main.font.size.lg};
    width: 100%;
    
    &:hover {
      background-color: ${colors.purple[700]};
    }
    
    @media (max-width: 768px) {
      font-size: calc(${theme.main.font.size.lg} * 0.9);
      padding: 0.4rem 0.8rem;
    }
  `,
};