import React, {
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import tw, { styled, css } from "twin.macro";
import {
	useSpring,
	useChain,
	useSpringRef,
	SpringRef,
	animated as a,
} from "react-spring";
import { ImPlus } from "react-icons/im";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// ===== TYPES =====
export type DirectorProps = {
	name: string;
	title: string;
	avatar: string;
	quote: string;
	twitter: string;
	linkedin: string;
};

// ===== STYLES =====
const Wrapper = styled.div`
	${tw`relative mb-7`};
	${tw`width[20.4375rem] height[15.8125rem]`};
	${tw`lg:(width[21.875rem] height[15.8125rem])`};
	${tw`text-white text-[15px] line-height[25px]`};
`;

const Avatar = styled.img`
	${tw`w-24 h-24`};
	${tw`rounded-full border-2 border-[#C4FFFE]`};
`;

const toggle = css`
	${tw`w-14 h-14`};
	${tw`flex items-center justify-center`};
	${tw`rounded-full text-lg text-white`};
	${tw`transition-colors duration-300 ease-in-out`};
`;

// ===== COMPONENTS =====
export const CardToggle = ({
	open,
	setOpen,
	springRef,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	springRef: SpringRef;
}) => {
	const rotate = useSpring({
		from: { rotateZ: 0 },
		to: { rotateZ: 315 },
		config: { mass: 1, tension: 200, friction: 60 },
		reverse: !open,
		ref: springRef,
	});

	return (
		<a.button
			type="button"
			css={[toggle]}
			style={{
				backgroundColor: open ? `#79C8C7` : `#F67E7E`,
				...rotate,
			}}
			onClick={() => setOpen(!open)}
		>
			<ImPlus />
		</a.button>
	);
};

const DirectorCard = ({
	name,
	title,
	avatar,
	quote,
	twitter,
	linkedin,
}: DirectorProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const springOneRef = useSpringRef();
	const springTwoRef = useSpringRef(); // pass into toggle

	const { opacity, transform } = useSpring({
		ref: springOneRef,
		opacity: open ? 1 : 0,
		transform: `rotateY(${open ? 180 : 0}deg)`,
		config: { mass: 1, tension: 250, friction: 80 },
	});

	useChain(
		open
			? [springOneRef, springTwoRef]
			: [springTwoRef, springOneRef],
		[0, open ? 0.1 : 0.1]
	);

	return (
		<Wrapper>
			<a.div
				style={{
					opacity: opacity.to((o) => 1 - o),
					transform,
				}}
				tw="w-full h-full flex justify-center bg-green-300"
			>
				<div tw="mt-9 flex flex-col items-center justify-between width[15rem] height[10.3125rem]">
					<h1 tw="text-lg text-blue-100 font-bold line-height[28px]">
						{name}
					</h1>

					<Avatar src={avatar} alt={name} />

					<h2 tw="text-white italic text-[15px] line-height[25px]">
						{title}
					</h2>
				</div>
			</a.div>
			<a.div
				style={{ opacity, transform, rotateY: `180deg` }}
				tw="w-full h-full absolute top-0 left-0 flex justify-center bg-green-400"
			>
				<div tw="mt-9 relative flex flex-col items-center justify-between width[15rem] height[10.3125rem]">
					<h1 tw="text-lg text-blue-100 font-bold line-height[28px]">
						{name}
					</h1>

					<h2 tw="text-white font-semibold text-[15px] line-height[25px] text-center">
						"{quote}"
					</h2>

					<div tw="flex items-center text-[22px]">
						<a
							href={twitter}
							target="_blank"
							tw="mx-2 transition duration-200 ease-in-out text-white hover:(text-coral)"
							aria-label={`Go to ${name}s Twitter.`}
						>
							<FaTwitter />
						</a>
						<a
							href={linkedin}
							target="_blank"
							tw="mx-2 transition duration-200 ease-in-out text-white hover:(text-coral)"
							aria-label={`Go to ${name}s Linkedin.`}
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</a.div>
			<div tw="absolute w-full height[fit-content] bottom-0 flex justify-center -mb-7">
				<CardToggle
					open={open}
					setOpen={setOpen}
					springRef={springTwoRef}
				/>
			</div>
		</Wrapper>
	);
};

export default DirectorCard;
