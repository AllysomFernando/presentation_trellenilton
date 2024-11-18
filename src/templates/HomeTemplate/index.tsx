"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";
import Banner from "@/components/Banner";
import { Solucoes } from "@/components/Solucoes";
import Cliente from "@/components/Cliente";
import Preco from "@/components/Preco";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Banner />
				<section id="solution">
					<Solucoes />
				</section>
				<section id="testimonials">
					<Cliente />
				</section>
				<section id="pricing">
					<Preco />
				</section>
				<section id="contact">
					<Contato />
				</section>
				<Footer />
			</S.Main>
		</S.Container>
	);
}
