import React from "react";
import tw, { styled } from "twin.macro";
import { UseFormRegister } from "react-hook-form";
import { FormFields } from "./form";

type InputTypes = `text` | `email` | `tel`;

type FormField = {
	label: string;
	name: "name" | "email" | "company" | "title" | "message";
	placeholder: string;
	register: UseFormRegister<FormFields>;
	fieldType: `INPUT` | `TEXTAREA`;
	errors: string | undefined;
	type?: InputTypes;
};

// ========== STYLES ==========

const styles = [
	tw`w-full bg-transparent`,
	tw`border-b border-white text-white opacity-100`,
	tw`text-[15px] line-height[25px]`,
	tw`p-4 my-3`,
	tw`focus:(border-blue-100) active:(border-blue-100)`,
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
				css={[styles, tw`height[5.25rem]`, `resize: none;`]}
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
