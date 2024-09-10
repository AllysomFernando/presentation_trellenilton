"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import { TextCards } from "@/components/Cards/text";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Banner />
				<Section />
				<Cards items={TextCards} />
			</S.Main>
		</S.Container>
	);
}
