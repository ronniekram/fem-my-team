import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";
import {
	ImFacebook2,
	ImPinterest,
	ImTwitter,
} from "react-icons/im";
import logo from "../../assets/images/logos/logo.svg";

// ===== STYLES =====
const Wrapper = styled.footer`
	${tw`bg-green-400 text-white font-semibold text-[15px]`};
	${tw`height[27rem] w-full py-16`};
	${tw`md:(height[16.9375rem])`};
	${tw`md:(flex justify-between items-stretch px-10 py-14)`};
	${tw`lg:(px-[10.3125rem])`};
`;

const Address = styled.div`
	${tw`line-height[25px] text-center`};
	${tw`mt-10 mb-4`};
	${tw`md:(text-right mb-8 mt-0)`};
`;

const Icons = styled.div`
	${tw`flex justify-between items-center width[6.6875rem]`};
	${tw`mx-auto`};
	${tw`text-2xl`};
	${tw`xl:(width[8rem] text-[27px] mt-4)`};
`;

const SocialLink = styled.a`
	${tw`text-white`};
	${tw`hover:(text-coral)`};
	${tw`transition duration-200 ease-in-out`};
`;

// ===== COMPONENTS =====
const Footer = () => {
	return (
		<Wrapper>
			<div tw="md:(mb-8 flex flex-col justify-between height[9.9375rem])">
				<div tw="flex justify-center">
					<img
						src={logo}
						alt="myteam logo"
						tw="width[6.6875rem] xl:(width[8rem])"
					/>
				</div>

				<div tw="">
					<div tw="flex mx-auto justify-between width[6.6875rem] my-6 md:(my-0) xl:(text-lg width[8rem])">
						<Link to="/">
							<span tw="text-white transition duration-200 ease-in-out hover:(text-coral)">
								home
							</span>
						</Link>
						<Link to="/about">
							<span tw="text-white transition duration-200 ease-in-out hover:(text-coral)">
								about
							</span>
						</Link>
					</div>

					<Icons>
						<SocialLink
							href="https://facebook.com"
							aria-label="Go to facebook"
							target="_blank"
						>
							<ImFacebook2 />
						</SocialLink>
						<SocialLink
							href="https://pinterest.com"
							aria-label="Go to pinterest"
							target="_blank"
						>
							<ImPinterest />
						</SocialLink>
						<SocialLink
							href="https://twitter.com"
							aria-label="Go to twitter"
							target="_blank"
						>
							<ImTwitter />
						</SocialLink>
					</Icons>
				</div>
			</div>

			<div tw="flex flex-col justify-items-stretch opacity-60">
				<Address>
					<p>987 Hillcrest Lane</p>
					<p>Irvine, CA</p>
					<p>California 92714</p>
					<p>Call Us: 949-833-7432</p>
				</Address>

				<div tw="text-center md:(text-right)">
					<p>Copyright 2020. All Rights Reserved</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
