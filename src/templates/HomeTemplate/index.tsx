"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";
import Banner from "@/components/Banner";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Banner />
				<Section />
			</S.Main>
		</S.Container>
	);
}
