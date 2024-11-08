import type { FC, ReactNode } from "react";
import "../base.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<html lang="en">
		<head />
		<body>{children}</body>
	</html>
);

export default RootLayout;
