import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bullets from "../components/contact/bullets";
import Form from "../components/contact/form";
import bg from "../assets/images/patterns/bg-pattern-about-2-contact-1.svg";
import bg2 from "../assets/images/patterns/bg-pattern-contact-2.svg";

const Contact = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div
				tw="pt-[5rem] md:(pt-[8rem]) xl:(pt-[10rem])"
				css={[
					`background-image: url(${bg2}); background-position-y: 112%; background-position-x: 156%; background-repeat: no-repeat;`,
					`@media (min-width: 768px) { background-image: url(${bg}), url(${bg2}); background-position-y: top, bottom; background-position-x: -100px, 117%; background-repeat: no-repeat; }`,
					`@media (min-width: 1280px) { background-image: url(${bg}), url(${bg2}); background-position-y: top, bottom; background-position-x: -100px, 108%; background-repeat: no-repeat; }`,
				]}
			>
				<div tw="pb-[88px] md:(pb-28) md:(pb-28) xl:(width[69.375rem] flex justify-between mx-auto)">
					<div tw="mx-6 md:(width[32.1875rem] mx-auto)">
						<div tw="mb-10">
							<h1 tw="font-bold text-white text-[40px] mb-4">
								Contact
							</h1>
							<h2 tw="text-coral font-bold text-[32px] line-height[48px]">
								Ask us about
							</h2>
						</div>
						<Bullets />
					</div>
					<Form />
				</div>
			</div>
		</Layout>
	);
};
export default Contact;
