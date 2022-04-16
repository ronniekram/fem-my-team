import React from "react";
import "twin.macro";
import Client, { ClientProps } from "./client";
import { widths, Wrapper } from "../about/directors";
import topBg from "../../assets/images/patterns/bg-pattern-home-4-about-3.svg";
import bottomBg from "../../assets/images/patterns/bg-pattern-about-2-contact-1.svg";

// ========== TYPES ==========
type ClientsProps = {
	clients: ClientProps[];
};

// ========== COMPONENTS ==========
const Clients = ({ clients }: { clients: ClientProps[] }) => (
	<div tw="w-full mx-auto bg-green-200">
		<div tw="w-full flex justify-start overflow-hidden">
			<img src={topBg} alt="" />
		</div>

		<h1
			tw="mx-auto mt-10 mb-12 text-white font-bold text-[32px] width[20.4375rem] md:(text-[34px]) lg:(text-4xl mb-14) xl:(text-5xl)"
			css={[widths]}
		>
			Delivering real results for top companies. Some of our
			<span tw="text-blue-100"> success stories.</span>
		</h1>

		<Wrapper tw="width[20.4375rem]" css={[widths]}>
			{clients.map((client) => {
				const { name, title, quote, avatar } = client;
				return (
					<div key={name} tw="mx-auto width[min-content]">
						<Client
							name={name}
							title={title}
							quote={quote}
							avatar={avatar}
						/>
					</div>
				);
			})}
		</Wrapper>

		<div tw="w-full flex justify-end mt-16 md:(mt-10) overflow-hidden">
			<img src={bottomBg} alt="" tw="margin-bottom[-100px]" />
		</div>
	</div>
);

export default Clients;
