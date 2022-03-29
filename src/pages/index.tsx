import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DirectorCard from "../components/about/director";
import nikita from "../assets/images/avatars/avatar-nikita.jpg";

const Home = (): JSX.Element => {
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
		</Layout>
	);
};
export default Home;
