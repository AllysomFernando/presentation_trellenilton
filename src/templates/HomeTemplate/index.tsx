"use client";

import React from "react";
import { styles } from "./styles";
import Header from "@/components/Header";

export default function HomeTemplate() {
	return (
		<styles.Container>
			<styles.Main>
				<Header />
			</styles.Main>
		</styles.Container>
	);
}
