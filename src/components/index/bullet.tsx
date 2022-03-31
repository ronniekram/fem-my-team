import React from "react";
import tw, { styled } from "twin.macro";

// ========== TYPES ==========
export type BulletProps = {
	icon: JSX.Element;
	title?: string;
	content: string;
};

// ========== STYLES ==========
const Contact = styled.div`
	${tw`mx-auto`};
	${tw`width[20.4375rem]`};
	${tw`md:(width[32.1875rem])`};
	${tw`xl:(width[33.75rem])`};
	${tw`text-white text-lg font-bold line-height[28px]`};
	${tw`flex items-center`};
`;

const Index = styled.div`
	${tw`mx-auto`};
	${tw`width[20.4375rem]`};
	${tw`md:(width[35.8125rem])`};
	${tw`xl:(width[33.75rem] mb-8)`};
	${tw`md:(flex items-center)`};
	h2 {
		${tw`text-coral text-lg font-bold line-height[28px] mb-2 md:(mb-4)`};
	}
	p {
		${tw`text-white text-[15px] line-height[25px]`};
	}
`;

// ========== COMPONENTS ==========
const Bullet = ({ icon, title, content }: BulletProps) => {
	return title ? (
		<Index>
			<div tw="md:(mr-6)">{icon}</div>
			<div>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</Index>
	) : (
		<Contact>
			<div tw="mr-6">{icon}</div>
			<div>{content}</div>
		</Contact>
	);
};

export default Bullet;
