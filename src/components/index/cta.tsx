import React from "react";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";
import bgLeft from "../../assets/images/patterns/bg-pattern-home-1.svg";
import bgRight from "../../assets/images/patterns/bg-pattern-home-2.svg";

// ========== TYPES ==========

// ========== STYLES ==========
const Title = styled.div`
	${tw`pt-20`};
	${tw`xl:(w-1/2 pt-0)`};
	h1 {
		${tw`text-[40px] font-bold text-white`};
		${tw`md:(text-[64px] line-height[56px])`};
		${tw`xl:(text-[100px] line-height[100px])`};
	}
	span {
		${tw`text-coral`};
	}
`;

const Body = styled.div`
	${tw`pt-6 pb-24`};
	${tw`lg:(pb-12)`};
	${tw`xl:(flex flex-col justify-between w-1/2 px-6 pt-0 pb-0 pl-20)`};
	p {
		${tw`text-white text-[15px] line-height[28px] font-semibold`};
		${tw`text-lg line-height[28px]`};
	}
`;

// ========== COMPONENTS ==========
const CallToAction = () => {
	const { width } = useWindowSize();

	return (
		<div tw="w-full">
			{width > 1440 && (
				<div tw="width[200px] overflow-hidden">
					<img
						src={bgLeft}
						alt=""
						tw="width[12.5rem] height[12.5rem] margin-left[-100px]"
					/>
				</div>
			)}
			<div tw="mx-auto width[20.4375rem] md:(width[28.5625rem]) xl:(flex items-stretch justify-between width[55rem]) xl:(width[69.375rem] height[12.5rem] -mt-40)">
				<Title>
					<h1>
						Find the best <span>talent</span>
					</h1>
				</Title>
				<Body>
					{width > 1440 && (
						<div tw="bg-blue-100 width[50px] h-1" />
					)}
					<p>
						Finding the right people and building high
						performing teams can be hard. Most companies
						aren't tapping into the abundance of global
						talent. We're about to change that.
					</p>
				</Body>
			</div>

			<div tw="w-full flex justify-center overflow-hidden xl:(justify-end pt-[6.25rem])">
				<img
					src={bgRight}
					alt=""
					tw="mx-auto width[22.375rem] xl:(mx-0)"
				/>
			</div>
		</div>
	);
};

export default CallToAction;
