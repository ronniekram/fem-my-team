import React from "react";
import "twin.macro";
import { useWindowSize } from "react-use";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MobileNav, Nav } from "../components/layout/nav";

const Home = (): JSX.Element => {
	const { width } = useWindowSize();
	return (
		<Layout>
			<SEO />
			<div tw="w-screen h-screen bg-blue-200 mx-auto relative overflow-x-hidden">
				{width < 768 ? <MobileNav /> : <Nav />}
			</div>
		</Layout>
	);
};
export default Home;
