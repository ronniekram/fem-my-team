import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Directors from "../components/about/directors";
import Logos from "../components/about/logos";
import Banner from "../components/layout/footer-banner";
import { directors } from "../assets/people";

const About = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<Directors directors={directors} />
			<Logos />
			<Banner />
		</Layout>
	);
};
export default About;
