import tw, { styled } from "twin.macro";

// ========== TYPES
type ButtonProps = {
	label: string;
	color: `PRIMARY LIGHT` | `PRIMARY DARK` | `SECONDARY`;
	href?: string;
	onClick?: () => void;
};

// ========== STYLES
const baseStyles = [
	tw`rounded-3xl`,
	tw`font-semibold text-lg line-height[28px]`,
	tw`transition duration-300 ease-in-out`,
	tw`width[9.5625rem] height[3rem]`,
	tw`disabled:(opacity-25)`,
];

const light = [
	tw`text-white bg-transparent`,
	tw`border-2 border-white`,
	tw`hover:(text-green-400 bg-white)`,
];

const dark = [
	tw`text-green-400 bg-transparent`,
	tw`border-2 border-green-400`,
	tw`hover:(text-white bg-green-400)`,
];

const secondary = [
	tw`bg-white text-green-400`,
	tw`hover:(bg-blue-100)`,
];

// ========== COMPONENTS
const Button = ({
	label,
	color,
	href,
	onClick,
}: ButtonProps) => {};

export default Button;
