"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
