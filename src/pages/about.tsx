import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/layout/footer-banner";

const About = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<Banner />
		</Layout>
	);
};
export default About;
