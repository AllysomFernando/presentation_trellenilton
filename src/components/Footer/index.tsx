import React from "react";
import {
	FooterContainer,
	FooterSection,
	FooterTitle,
	FooterLink,
	FooterMain,
	FooterDivIcon
} from "./styles";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Utility } from "@/styles/utility";
import Logo from "@/assets/logo.svg";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterMain>
				<FooterSection>
					<Utility.Image src={Logo} alt="Logo Trellenilton" width={200} />
					<FooterDivIcon>
						<FaInstagram size={24} />
						<FaFacebook size={24} />
						<FaYoutube size={24} />
					</FooterDivIcon>
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
			</FooterMain>
		</FooterContainer>
	);
}
