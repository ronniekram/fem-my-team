import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/layout/footer-banner";
import Logos from "../components/about/logos";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="mt-12 w-full flex justify-center">
				<Logos />
			</div>
		</Layout>
	);
};
export default Home;
