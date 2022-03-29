import React from "react";
import tw, { styled } from "twin.macro";
import DirectorCard, {
	DirectorProps as Director,
} from "./director";
import topBg from "../../assets/images/patterns/bg-pattern-about-2-contact-1.svg";
import bottomBg from "../../assets/images/patterns/bg-pattern-home-4-about-3.svg";

// ========== TYPES ==========
type DirectorsProps = {
	directors: Director[];
};

// ========== STYLES ==========
const widths = tw`md:(width[42.8125rem]) lg:(width[45.625rem]) xl:(width[69.375rem])`;
const Wrapper = styled.div`
	${tw`grid`};
	${tw`grid-cols-1 gap-y-6`};
	${tw`md:(grid-cols-2 gap-y-12 gap-x-3)`};
	${tw`xl:(grid-cols-3 gap-x-[30px])`}
	${tw`mx-auto`};
`;

// ========== COMPONENTS ==========
const Directors = ({ directors }: DirectorsProps) => (
	<div tw="w-full bg-green-200 mx-auto ">
		<div tw="w-full flex justify-start overflow-hidden">
			<img
				src={topBg}
				alt=""
				tw="-ml-24 margin-top[-100px] md:(mt-0 margin-left[-100px])"
			/>
		</div>
		<h1
			tw="mx-6 text-white text-[32px] font-bold -mt-4 mb-12 md:(mx-auto -mt-8) lg:(text-5xl) xl:(mb-16 -mt-12)"
			css={[widths]}
		>
			Meet the directors
		</h1>
		<Wrapper css={[widths]}>
			{directors.map((person) => {
				const {
					name,
					title,
					quote,
					avatar,
					linkedin,
					twitter,
				} = person;
				return (
					<div key={name} tw="mx-auto width[min-content]">
						<DirectorCard
							name={name}
							title={title}
							quote={quote}
							avatar={avatar}
							linkedin={linkedin}
							twitter={twitter}
						/>
					</div>
				);
			})}
		</Wrapper>

		<div tw="w-full flex justify-end">
			<img src={bottomBg} alt="" tw="-mr-0" />
		</div>
	</div>
);

export default Directors;
