import tw, { css } from "twin.macro";

export interface EllipsProps {
	character: string;
}

// ========= COMPONENT =========

/**
 * An ellipsis that animates each of its dots opacity infinitely in a sequence.
 *
 * @param props
 * @returns A React component.
 */
const AnimatedEllipsis = ({
	character = `•`,
}: EllipsProps) => {
	return (
		<span
			css={css`
				@keyframes dot {
					0% {
						opacity: 0;
					}
					50% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}
			`}
		>
			<span
				css={[
					tw`opacity[0] animation[dot 2s infinite] animation-delay[0s] text-2xl`,
					tw`text-current`,
				]}
			>
				{character}
			</span>
			<span
				css={[
					tw`opacity[0] animation[dot 2s infinite] animation-delay[0.25s] text-2xl`,
					tw`text-current`,
				]}
			>
				{character}
			</span>
			<span
				css={[
					tw`opacity[0] animation[dot 2s infinite] animation-delay[0.5s] text-2xl`,
					tw`text-current`,
				]}
			>
				{character}
			</span>
		</span>
	);
};

export default AnimatedEllipsis;
