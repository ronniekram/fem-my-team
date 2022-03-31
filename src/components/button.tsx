import { Link } from "gatsby";
import tw from "twin.macro";

// ========== TYPES
const colors = {
	LIGHT: [
		tw`text-white bg-transparent`,
		tw`border-2 border-white`,
		tw`hover:(text-green-400 bg-white)`,
		tw`disabled:(opacity-25 bg-transparent transition-none text-white)`,
	],
	DARK: [
		tw`text-green-400 bg-transparent`,
		tw`border-2 border-green-400`,
		tw`hover:(text-white bg-green-400)`,
		tw`disabled:(opacity-25 bg-transparent transition-none text-green-400)`,
	],
	SECONDARY: [
		tw`bg-white text-green-400`,
		tw`hover:(bg-blue-100)`,
		tw`disabled:(opacity-25 bg-white transition-none text-green-400)`,
	],
};

type ButtonProps = {
	label: string | JSX.Element;
	color: keyof typeof colors;
	href?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: `submit` | `button` | `reset`;
};

// ========== STYLES
const baseStyles = [
	tw`rounded-3xl cursor-pointer`,
	tw`font-display font-semibold text-lg line-height[28px]`,
	tw`transition duration-300 ease-in-out`,
	tw`flex justify-center items-center`,
	tw`width[9.5625rem] height[3rem]`,
	tw`disabled:(cursor-not-allowed)`,
];

// ========== COMPONENTS
const Button = ({
	label,
	color,
	href,
	onClick,
	disabled,
	type,
}: ButtonProps) => {
	if (href) {
		return (
			<div css={[baseStyles, colors[color]]}>
				<Link to={href}>{label}</Link>
			</div>
		);
	}

	return (
		<button
			type={type || `button`}
			disabled={disabled}
			onClick={onClick}
			css={[baseStyles, colors[color]]}
		>
			{label}
		</button>
	);
};

export default Button;
