import React from "react";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";
import Bullet, { BulletProps } from "./bullet";
import bg from "../../assets/images/patterns/bg-pattern-home-3.svg";
import person from "../../assets/images/icons/icon-person.svg";
import cog from "../../assets/images/icons/icon-cog.svg";
import chart from "../../assets/images/icons/icon-chart.svg";

// ========== TYPES/MISC ==========
const bullets: BulletProps[] = [
	{
		icon: <img src={person} alt="" />,
		title: `Experienced Individuals`,
		content: `Our network is made up of highly experienced professionals who are passionate about what they do.`,
	},
	{
		icon: <img src={cog} alt="" />,
		title: `Easy to Implement`,
		content: `Our processes have been refined over years of implementation meaning our teams always deliver.`,
	},
	{
		icon: <img src={chart} alt="" />,
		title: `Enhanced Productivity`,
		content: `Our customized platform with in-built analytics helps you manage your distributed teams.`,
	},
];

// ========== STYLES ==========

const Wrapper = styled.section`
	${tw`mx-auto width[20.4375rem] md:(width[35.8125rem]) xl:(width[69.375rem])`};
	${tw`xl:(flex justify-between items-stretch pt-[8.75rem])`};
	h1 {
		${tw`text-white font-bold`};
		${tw`text-[32px]`};
		${tw`xl:(text-[48px])`};
		${tw`w-3/4`};
	}
`;

// ========== COMPONENTS ==========
const IndexHeader = () => {
	const { width } = useWindowSize();

	return (
		<div tw="w-full bg-green-300">
			<Wrapper>
				<div tw="flex justify-between relative w-full">
					<div tw="relative z-10 mt-16 mb-14 md:(mt-24) xl:(mt-0)">
						<div tw="bg-coral width[50px] h-1 mb-[3.375rem]" />
						<h1 tw="line-height[normal]">
							Build & manage distributed teams link no one
							else.
						</h1>
					</div>
					{width < 1440 && (
						<div tw="overflow-hidden">
							<img
								src={bg}
								tw="width[12.5rem] height[15.25rem] margin-right[-124px] absolute top-0 right-0 z-0 md:(mr-[-200px])"
							/>
						</div>
					)}
				</div>
				<div tw="pb-16 md:(pb-24) xl:(pb-0)">
					{bullets.map((bullet) => (
						<Bullet
							key={bullet.title}
							icon={bullet.icon}
							title={bullet.title}
							content={bullet.content}
						/>
					))}
				</div>
			</Wrapper>
			{width >= 1440 && (
				<div tw="w-full overflow-hidden flex justify-end">
					<img
						src={bg}
						tw="width[12.5rem] height[15.5rem] margin-right[-100px]"
					/>
				</div>
			)}
		</div>
	);
};

export default IndexHeader;
