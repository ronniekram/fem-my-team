import { Link } from "gatsby";
import tw from "twin.macro";

// ========== TYPES
const colors = {
	LIGHT: [
		tw`text-white bg-transparent`,
		tw`border-2 border-white`,
		tw`hover:(text-green-400 bg-white)`,
	],
	DARK: [
		tw`text-green-400 bg-transparent`,
		tw`border-2 border-green-400`,
		tw`hover:(text-white bg-green-400)`,
	],
	SECONDARY: [
		tw`bg-white text-green-400`,
		tw`hover:(bg-blue-100)`,
	],
};

type ButtonProps = {
	label: string;
	color: keyof typeof colors;
	href?: string;
	onClick?: () => void;
};

// ========== STYLES
const baseStyles = [
	tw`rounded-3xl`,
	tw`font-display font-semibold text-lg line-height[28px]`,
	tw`transition duration-300 ease-in-out`,
	tw`width[9.5625rem] height[3rem]`,
	tw`disabled:(opacity-25)`,
];

// ========== COMPONENTS
const Button = ({
	label,
	color,
	href,
	onClick,
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
			type="button"
			onClick={onClick}
			css={[baseStyles, colors[color]]}
		>
			{label}
		</button>
	);
};

export default Button;
