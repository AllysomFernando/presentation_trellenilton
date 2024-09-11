"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";
import Banner from "@/components/Banner";
import { Solucoes } from "@/components/Solucoes";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Banner />
				<Section />
				<Solucoes />
			</S.Main>
		</S.Container>
	);
}
