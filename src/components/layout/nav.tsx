import React, { useState } from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";
import { useSpring, animated as a } from "react-spring";
import Button from "../button";
import logo from "../../assets/images/logos/logo.svg";
import burger from "../../assets/images/icons/icon-hamburger.svg";
import close from "../../assets/images/icons/icon-close.svg";
import mobileBg from "../../assets/images/patterns/bg-pattern-about-1-mobile-nav-1.svg";

// ========== STYLES
const MobileBar = styled.div`
	${tw`w-full`};
	${tw`relative z-0`};
	${tw`flex items-center justify-between`};
	${tw`px-6 pt-14`};
`;
const MobileSlide = styled.nav`
	${tw`bg-blue-200 bg-no-repeat`};
	${tw`w-full h-screen`};
	${tw`overflow-hidden`};
	${tw`z-20`};
	${tw`pt-14`};
	${tw`flex flex-col justify-between`};
	${tw`relative z-20`};
	${tw`shadow-xl`};
`;

const Bar = styled.nav`
	${tw`w-full height[11.125rem]`};
	${tw`flex items-center justify-between`};
	${tw`px-10 lg:(px-[10.3125rem])`};
`;

const Href = styled.div`
	${tw`font-semibold`};
	${tw`text-lg text-white line-height[28px]`};
	${tw`mb-6 md:(mb-0)`};
	${tw`hocus:(text-coral)`};
	${tw`transition duration-300 ease-in-out`};
`;

// ========== COMPONENTS
export const MobileNav = () => {
	const [open, setOpen] = useState<boolean>(false);

	const { right } = useSpring({
		from: { right: -300 },
		right: open ? 0 : -300,
	});

	return (
		<>
			<MobileBar>
				{open && (
					<div tw="absolute top-0 left-0 bg-black opacity-50 width[23.4375rem] h-full" />
				)}
				<div>
					<img src={logo} alt="myteam logo" tw="w-32 h-8" />
				</div>
				<div>
					<button
						type="button"
						aria-label="Open navigation menu"
						onClick={() => setOpen(!open)}
					>
						<img src={burger} alt="Open menu" />
					</button>
				</div>
			</MobileBar>

			{open && (
				<div tw="w-screen h-screen bg-black opacity-50 absolute z-10" />
			)}

			<a.div
				style={{
					right,
					position: `absolute`,
					top: 0,
					height: `100vh`,
					width: `15.9375rem`,
				}}
			>
				<MobileSlide css={[open && tw`overflow-y-hidden`]}>
					<div tw="width[11.375rem] mx-auto">
						<div tw="float-right mb-[2.4375rem]">
							<button
								type="button"
								onClick={() => setOpen(!open)}
								aria-label="Close menu"
							>
								<img src={close} alt="Close menu" />
							</button>
						</div>
						<div tw="mt-[2.4375rem]">
							<Href>
								<Link to="/">home</Link>
							</Href>
							<Href>
								<Link to="/about">about</Link>
							</Href>

							<Button
								color="LIGHT"
								href="/contact"
								label="contact"
							/>
						</div>
					</div>

					<div tw="margin-right[-100px]">
						<img
							src={mobileBg}
							alt=""
							tw="width[12.5rem] height[12.5rem] float-right"
						/>
					</div>
				</MobileSlide>
			</a.div>
		</>
	);
};

export const Nav = () => {
	return (
		<Bar>
			<div tw="flex items-center justify-between width[23.75rem]">
				<Link to="/">
					<img src={logo} alt="myteam logo" tw="w-40 h-10" />
				</Link>

				<div tw="flex items-center">
					<Href tw="mr-10">
						<Link to="/">home</Link>
					</Href>

					<Href>
						<Link to="/about">about</Link>
					</Href>
				</div>
			</div>
			<div>
				<Button
					color="LIGHT"
					label="contact"
					href="/contact"
				/>
			</div>
		</Bar>
	);
};
