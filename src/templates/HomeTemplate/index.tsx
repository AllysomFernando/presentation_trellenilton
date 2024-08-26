"use client";

import React from "react";
import { S } from "./styles";
import Header from "@/components/Header";

export default function HomeTemplate() {
	return (
		<S.Container>
			<S.Main>
				<Header />
			</S.Main>
		</S.Container>
	);
}
