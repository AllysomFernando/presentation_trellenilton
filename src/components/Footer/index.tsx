import React from "react";
import {
	FooterContainer,
	FooterSection,
	FooterTitle,
	FooterLink,
	FooterBottom,
	FooterText,
} from "./styles";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterSection>
				<FooterTitle>LogoMarca</FooterTitle>
				<div>
					<FaInstagram size={24} />
					<FaFacebook size={24} />
					<FaYoutube size={24} />
				</div>
			</FooterSection>
			<FooterSection>
				<FooterTitle>Empresa</FooterTitle>
				<FooterLink href="#">Sobre nós</FooterLink>
				<FooterLink href="#">Faça parte do time</FooterLink>
				<FooterLink href="#">Blog</FooterLink>
			</FooterSection>
			<FooterSection>
				<FooterTitle>Funcionalidades</FooterTitle>
				<FooterLink href="#">Marketing</FooterLink>
				<FooterLink href="#">Análise de dados</FooterLink>
				<FooterLink href="#">Boot discord</FooterLink>
			</FooterSection>
			<FooterSection>
				<FooterTitle>Recursos</FooterTitle>
				<FooterLink href="#">IOS & Android</FooterLink>
				<FooterLink href="#">Teste a Demo</FooterLink>
				<FooterLink href="#">Clientes</FooterLink>
				<FooterLink href="#">API</FooterLink>
			</FooterSection>
			<FooterBottom>
				<FooterText>
					Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os
					direitos reservados.
				</FooterText>
			</FooterBottom>
		</FooterContainer>
	);
}
