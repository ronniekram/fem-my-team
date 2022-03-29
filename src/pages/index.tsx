import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Directors from "../components/about/directors";
import Clients from "../components/about/clients";
import { clients, directors } from "../assets/people";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="mt-12 w-full flex justify-center">
				{/* <Directors directors={directors} /> */}
				<Clients clients={clients} />
			</div>
		</Layout>
	);
};
export default Home;
