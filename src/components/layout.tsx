import * as React from "react";
import { GlobalStyles } from "twin.macro";
import { useWindowSize } from "react-use";
import { MobileNav, Nav } from "./layout/nav";
import Footer from "./layout/footer";
import "../assets/styles/fonts.css";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const { width } = useWindowSize();
	return (
		<div
			{...rest}
			tw="font-display antialiased flex flex-col w-screen h-screen relative overflow-x-hidden bg-blue-200"
		>
			<GlobalStyles />
			<div css={[`flex: 1 0 auto;`]}>
				{width < 768 ? <MobileNav /> : <Nav />}
				{children}
			</div>
			<div css={[`flex-shrink: 0;`]}>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
