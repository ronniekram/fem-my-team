import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CallToAction from "../components/index/cta";
import Header from "../components/index/header";
import Clients from "../components/index/clients";
import Banner from "../components/layout/footer-banner";
import { clients } from "../assets/people";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="w-full mx-auto relative bg-green-100">
				<CallToAction />
				<Header />
				<Clients clients={clients} />
				<Banner />
			</div>
		</Layout>
	);
};
export default Home;
