import React from "react";
import tw, { styled } from "twin.macro";
import quotes from "../../assets/images/icons/icon-quotes.svg";

// ===== TYPES =====
export type ClientProps = {
	name: string;
	title: string;
	quote: string;
	avatar: string;
};

// ===== STYLES =====
const Wrapper = styled.div`
	background: url(${quotes});
	background-position: top center;
	background-repeat: no-repeat;
	${tw`width[20rem] height[17.375rem]`};
	${tw`md:(width[19rem])`};
	${tw`lg:(width[20.875rem] height[18.875rem])`};
	${tw`text-white bg-green-200`};

	p {
		${tw`text-[15px] line-height[25px] font-semibold break-words`};
		${tw`pt-9`};
		${tw`md:(pr-1.5) lg:(pr-2)`}
	}

	h1 {
		${tw`text-lg line-height[28px] font-bold text-blue-100`};
		${tw`mt-4 mb-[2px]`};
		${tw`lg:(mt-6)`};
	}

	h2 {
		${tw`text-[13px] line-height[18px] italic font-medium`};
	}
`;

const Avatar = styled.img`
	${tw`width[3.875rem] height[3.875rem]`};
	${tw`rounded-full`};
	${tw`border-2 border-[#C4FFFE]`};
	${tw`mt-4 mb-2.5 mr-2`};
	${tw`lg:(mt-8 mr-3)`};
`;

// ===== COMPONENTS =====
const Client = ({
	name,
	title,
	quote,
	avatar,
}: ClientProps) => (
	<Wrapper>
		<p>{quote}</p>
		<div tw="w-full flex justify-between items-center">
			<div>
				<h1>{name}</h1>
				<h2>{title}</h2>
			</div>
			<div tw="flex justify-end mt-2.5">
				<Avatar src={avatar} alt={`${name} - ${title}`} />
			</div>
		</div>
	</Wrapper>
);

export default Client;
