import tw, { styled } from "twin.macro";

// ========== TYPES
type ButtonProps = {
	label: string;
	color: `PRIMARY LIGHT` | `PRIMARY DARK` | `SECONDARY`;
	href?: string;
	onClick?: () => void;
};

// ========== STYLES

// 153 x 48
// border radius: 1.5rem
// font: semi-bold, 18px line-height: 28px

// ========== COMPONENTS
