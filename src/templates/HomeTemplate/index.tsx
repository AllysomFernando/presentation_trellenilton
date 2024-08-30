"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";
import Section from "@/components/Components";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
				<Section />
			</S.Main>
		</S.Container>
	);
}
