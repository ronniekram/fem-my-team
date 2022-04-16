import React from "react";
import "twin.macro";
import bg from "../../assets/images/patterns/bg-pattern-about-1-mobile-nav-1.svg";

const AboutHeader = () => (
	<div tw="w-full text-white overflow-hidden pt-[5rem]">
		<div tw="mx-6 md:(width[28.5625rem] mx-auto) xl:(flex justify-between width[69.375rem])">
			<h1 tw="text-[40px] font-bold mb-4 md:(text-[64px] line-height[56px] mb-6) xl:(line-height[100px])">
				About
			</h1>
			<div>
				<div tw="width[50px] h-1 bg-coral hidden xl:(block mb-10)" />
				<p tw="text-[15px] line-height[28px] font-semibold mb-2 xl:(width[45.625rem])">
					We help companies build dynamic teams made up of top
					global talent. Using our network of passionate
					professionals we drive innovation and deliver
					incredible outcomes. Talented, diverse teams shape
					the best products and experiences. We'll bring those
					teams to you.
				</p>
			</div>
		</div>
		<div tw="w-full flex justify-end">
			<img
				src={bg}
				alt=""
				tw="width[12.5rem] height[12.5rem] margin-right[-6.25rem] margin-bottom[-6.25rem] md:(mb-0 margin-top[-6.25rem]) xl:(margin-top[-3rem])"
			/>
		</div>
	</div>
);

export default AboutHeader;
