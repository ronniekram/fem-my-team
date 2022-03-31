import React from "react";
import tw, { styled } from "twin.macro";
import {
	UseFormRegister,
	FieldValues,
} from "react-hook-form";

type InputTypes = `text` | `email` | `tel`;

type FormField = {
	label: string;
	name: string;
	placeholder: string;
	register: UseFormRegister<FieldValues>;
	fieldType: `INPUT` | `TEXTAREA`;
	errors?: any;
	type?: InputTypes;
};

// ========== STYLES ==========

const styles = [
	tw`w-full`,
	tw`border-b border-white text-white`,
	tw`text-[15px] line-height[25px]`,
	tw`p-4`,
	tw`focus:(border-blue-100)`,
	`
    ::placeholder {
      ${tw`text-white opacity-60`};
    }
    ::-moz-placeholder {
      ${tw`text-white opacity-60`};
    }

    :-ms-input-placeholder {
      ${tw`text-white opacity-60`};
    }
    ::-webkit-input-placeholder {
      ${tw`text-white opacity-60`};
    }
  `,
	`
    .error {
      ${tw`text-coral opacity-60`};
    }
  `,
	`letter-spacing: -0.115385px;`,
];

// ========== COMPONENTS ==========
const Input = ({
	label,
	name,
	placeholder,
	register,
	errors,
	fieldType,
	type,
}: FormField) => (
	<fieldset>
		{" "}
		<label htmlFor={name} tw="sr-only">
			{label}
		</label>
		{fieldType === `INPUT` ? (
			<input
				{...register(name, { required: true })}
				name={name}
				placeholder={placeholder}
				type={type}
				css={[styles]}
			/>
		) : (
			<textarea
				{...register(name, { required: true })}
				name={name}
				placeholder={placeholder}
				css={[styles]}
			/>
		)}
		{errors && (
			<p tw="font-bold italic text-coral text-[10px] line-height[12.55px] m-2">
				{errors}
			</p>
		)}
	</fieldset>
);

export default Input;
