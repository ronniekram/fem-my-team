import React from "react";
import tw, { styled } from "twin.macro";
import Button from "../button";
import bg from "../../assets/images/patterns/bg-pattern-home-6-about-5.svg";

const Wrapper = styled.div`
	background: url(${bg});
	background-position: bottom left;
	background-repeat: no-repeat;
	background-size: 50%;
	${tw`bg-coral`};
	${tw`w-full height[18.875rem]`};
	${tw`md:(height[12.5rem] background-size[20%])`};
	${tw`xl:(background-size[13%])`};
	${tw`flex justify-center items-center`};
`;

const Banner = () => (
	<Wrapper>
		<div tw="w-full flex flex-col items-center -mt-6 md:(flex-row justify-between width[35.8125rem] -mt-2 mx-auto) xl:(width[57.3125rem] mt-0)">
			<h1 tw="font-bold text-green-400 text-[32px] pb-4 md:(pb-0 text-[36px]) xl:(text-5xl)">
				Ready to get started?
			</h1>
			<Button
				href="/contact"
				color="DARK"
				label="contact us"
			/>
		</div>
	</Wrapper>
);

export default Banner;
