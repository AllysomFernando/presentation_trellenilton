"use client";

import NavBar from "@/components/Navbar";
import React from "react";
import { styles } from "./styles";

export default function HomeTemplate() {
	return (
		<styles.Container>
			<styles.Main>
				<NavBar />
			</styles.Main>
		</styles.Container>
	);
}
