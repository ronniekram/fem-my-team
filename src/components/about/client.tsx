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
	${tw`width[20.4375rem] height[17.375rem]`};
	${tw`lg:(width[21.875rem] height[18.875rem])`};
	${tw`text-white bg-green-200`};

	p {
		${tw`text-[15px] line-height[25px] font-semibold text-center`};
		${tw`mt-9`};
	}

	h1 {
		${tw`text-lg line-height[28px] font-bold text-blue-100 text-center`};
		${tw`mt-4 mb-[2px]`};
		${tw`lg:(mt-6)`};
	}

	h2 {
		${tw`text-[13px] line-height[18px] italic font-medium text-center`};
	}
`;

const Avatar = styled.img`
	${tw`width[3.875rem] height[3.875rem]`};
	${tw`rounded-full mx-auto`};
	${tw`border-2 border-[#C4FFFE]`};
	${tw`mt-4`};
	${tw`lg:(mt-8)`};
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
		<h1>{name}</h1>
		<h2>{title}</h2>
		<Avatar src={avatar} alt={`${name} - ${title}`} />
	</Wrapper>
);

export default Client;
