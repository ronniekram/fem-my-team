import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { useForm } from "react-hook-form";
import Input from "./input";
import Button from "../button";
import AnimatedEllipsis from "../ellipsis";
import bg from "../../assets/images/patterns/bg-pattern-contact-2.svg";

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
	const [disabled, setDisabled] = useState<boolean>(true);

	const {
		handleSubmit,
		register,
		getValues,
		watch,
		formState: { errors, isSubmitting, isValid },
	} = useForm<FormFields>();

	const onSubmit = (data: FormFields) => {
		console.log(data);
	};

	const allFields = watch();

	useEffect(() => {
		const values = Object.values(getValues());
		if (values.every((value) => value.trim() !== ``)) {
			setDisabled(!disabled);
		}
	}, [allFields]);

	return (
		<div tw="w-full bg-transparent pt-[3.5rem] relative xl:(pt-0)">
			<FormWrapper onSubmit={handleSubmit(onSubmit)}>
				<Input
					fieldType="INPUT"
					label="Name"
					name="name"
					placeholder="Name"
					type="text"
					errors={errors?.name?.message || undefined}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Email"
					name="email"
					placeholder="Email"
					type="email"
					errors={errors?.email?.message || undefined}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Company"
					name="company"
					placeholder="Company"
					type="text"
					errors={errors?.company?.message || undefined}
					register={register}
				/>

				<Input
					fieldType="INPUT"
					label="Title"
					name="title"
					placeholder="Title"
					type="text"
					errors={errors?.title?.message || undefined}
					register={register}
				/>

				<Input
					fieldType="TEXTAREA"
					label="Message"
					name="message"
					placeholder="Message"
					errors={errors?.message?.message || undefined}
					register={register}
				/>

				<div tw="pt-6 px-4">
					<Button
						label={
							isSubmitting ? (
								<AnimatedEllipsis character="•" />
							) : (
								"submit"
							)
						}
						color="SECONDARY"
						type="submit"
						disabled={disabled}
					/>
				</div>
			</FormWrapper>
		</div>
	);
};

export default Form;
