import React from "react";
import tw, { styled } from "twin.macro";
import { useForm } from "react-hook-form";
import Input from "./input";
import Button from "../button";
import AnimatedEllipsis from "../ellipsis";
import bg from "../../assets/images/patterns/bg-pattern-contact.svg";

// ========== TYPES ==========
export type FormFields = {
	name: string;
	email: string;
	company: string;
	title: string;
	message: string;
};

// ========== STYLES ==========

const FormWrapper = styled.form`
	${tw`mx-auto`};
	${tw`width[20.4375rem] md:(width[33.875rem])`};
`;

// ========== COMPONENTS ==========
const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isValid },
	} = useForm<FormFields>();

	const onSubmit = (data: FormFields) => {
		console.log(data);
	};

	return (
		<div tw="w-full">
			<FormWrapper onSubmit={handleSubmit(onSubmit)}>
				<Input
					fieldType="INPUT"
					label="Name"
					name="name"
					placeholder="Name"
					type="text"
					errors={errors}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Email"
					name="email"
					placeholder="Email"
					type="email"
					errors={errors}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Company"
					name="company"
					placeholder="Company"
					type="text"
					errors={errors}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Title"
					name="title"
					placeholder="Title"
					type="text"
					errors={errors}
					register={register}
				/>

				<Input
					fieldType="TEXTAREA"
					label="Message"
					name="message"
					placeholder="Message"
					errors={errors}
					register={register}
				/>

				<Button
					label={
						isSubmitting ? (
							<AnimatedEllipsis character="•" />
						) : (
							"submit"
						)
					}
					color="DARK"
					type="submit"
					disabled={!isValid}
				/>
			</FormWrapper>
			<div tw="overflow-hidden w-full flex justify-end">
				<img
					src={bg}
					alt=""
					tw="width[12.5rem] height[12.5rem] margin-bottom[-100px] margin-right[-100px]"
				/>
			</div>
		</div>
	);
};

export default Form;
