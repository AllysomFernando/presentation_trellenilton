"use client";

import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<html lang="en">
				<body>{children}</body>
			</html>
		</ThemeProvider>
	);
}
