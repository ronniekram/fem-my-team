import React from "react";
import tw, { styled } from "twin.macro";

type InputTypes = `text` | `email` | `tel`;

type FormField = {
	label: string;
	name: string;
	value: string;
	register: any;
};

// ========== STYLES ==========
const Field = styled.input``;

const TextField = styled.textarea``;

// ========== COMPONENTS ==========
export const Input = ({
	label,
	name,
	value,
	register,
	type,
}: FormField & { type: InputTypes }) => {};

export const TextArea = ({
	label,
	name,
	value,
	register,
}: FormField) => {};
