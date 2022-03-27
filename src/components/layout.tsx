import * as React from "react";
import { GlobalStyles } from "twin.macro";
import "../assets/styles/fonts.css";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest} tw="font-display">
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
