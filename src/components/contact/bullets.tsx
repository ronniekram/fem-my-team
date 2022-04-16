import React from "react";
import tw, { styled } from "twin.macro";
import Bullet, { BulletProps } from "../index/bullet";
import person from "../../assets/images/icons/icon-person.svg";
import cog from "../../assets/images/icons/icon-cog.svg";
import chart from "../../assets/images/icons/icon-chart.svg";

// ========== TYPES/MISC ==========
const bullets: BulletProps[] = [
	{
		icon: <img src={person} alt="" />,
		content: `The quality of our talent network`,
	},
	{
		icon: <img src={cog} alt="" />,
		content: `Usage & implementation of our software`,
	},
	{
		icon: <img src={chart} alt="" />,
		content: `How we help drive innovation`,
	},
];

const Bullets = () => (
	<div tw="mt-10 mb-14 md:(mt-6 mb-16) xl:(mt-8)">
		{bullets.map((bullet) => {
			const { icon, content } = bullet;
			return <Bullet icon={icon} content={content} />;
		})}
	</div>
);

export default Bullets;
