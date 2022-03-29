import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DirectorCard from "../components/about/director";
import Client from "../components/about/client";
import { clients } from "../assets/people";
import nikita from "../assets/images/avatars/avatar-nikita.jpg";

const Home = (): JSX.Element => {
	const { name, title, quote, avatar } = clients[0];

	return (
		<Layout>
			<SEO />
			<div tw="mt-12 w-full flex justify-center">
				<DirectorCard
					name="Nikita Marks"
					title="Founder & CEO"
					quote="It always amazes me how much talent there is in every corner of the globe."
					avatar={nikita}
					twitter="https://twitter.com/"
					linkedin="https://linkedin.com/"
				/>
			</div>
			<div tw="mt-12 w-full flex justify-center">
				<Client
					name={name}
					title={title}
					quote={quote}
					avatar={avatar}
				/>
			</div>
		</Layout>
	);
};
export default Home;
