"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";
import Banner from "@/components/Banner";
import { Solucoes } from "@/components/Solucoes";
import Cliente from "@/components/Cliente";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Banner />
				<Section />
				<Solucoes />
				<Cliente />
			</S.Main>
		</S.Container>
	);
}
