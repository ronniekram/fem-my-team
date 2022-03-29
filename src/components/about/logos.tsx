import React from "react";
import tw, { styled } from "twin.macro";
import bg from "../../assets/images/patterns/bg-pattern-about-4.svg";
import gadgets from "../../assets/images/logos/gadgets-now.png";
import jakarta from "../../assets/images/logos/jakarta-post.png";
import tech from "../../assets/images/logos/tech-radar.png";
import guardian from "../../assets/images/logos/the-guardian.png";
import verge from "../../assets/images/logos/the-verge.png";

const logos = [
	{
		name: `The Verge`,
		logo: verge,
	},
	{
		name: `Tech Radar`,
		logo: tech,
	},
	{
		name: `The Guardian`,
		logo: guardian,
	},
	{
		name: `Jakarta Post`,
		logo: jakarta,
	},
	{
		name: `Gadgets Now`,
		logo: gadgets,
	},
];

const Wrapper = styled.div`
	${tw`grid auto-rows-fr`};
	${tw`grid-cols-1 gap-x-6 gap-y-6`};
	${tw`md:(grid-cols-2 gap-8)`};
	${tw`lg:(grid-cols-3 gap-x-8 gap-y-10)`}
	${tw`mb-28`};
`;

const Logos = () => (
	<div tw="w-full bg-green-300 text-white">
		<div tw="w-full justify-start overflow-hidden">
			<img
				src={bg}
				alt=""
				tw="width[12.5rem] height[12.5rem] margin-left[-100px] margin-top[-100px] md:(ml-0) xl:(width[15.625rem] height[15.625rem] margin-top[-125px])"
			/>
		</div>
		<div tw="mx-auto width[20.3125rem] md:(width[30.75rem]) lg:(width[56.25rem]) xl:(width[60.75rem])">
			<h1 tw="font-bold text-blue-100 text-[32px] mt-2 mb-4 md:(text-4xl mt-6 mb-8) lg:(text-5xl mb-12) xl:(mt-0)">
				Some of our clients
			</h1>
			<Wrapper>
				{logos.map((logo) => (
					<div
						key={logo.name}
						tw="flex justify-center items-center md:(justify-start)"
					>
						<img
							src={logo.logo}
							tw="height[2.5rem] w-auto xl:(height[3rem])"
						/>
					</div>
				))}
			</Wrapper>
		</div>
	</div>
);

export default Logos;
