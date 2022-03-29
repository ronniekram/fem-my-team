import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Directors from "../components/about/directors";
import Client from "../components/about/client";
import { clients, directors } from "../assets/people";
import nikita from "../assets/images/avatars/avatar-nikita.jpg";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="mt-12 w-full flex justify-center">
				<Directors directors={directors} />
			</div>
		</Layout>
	);
};
export default Home;
