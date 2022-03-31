import React from "react";
import tw, { styled } from "twin.macro";
import { useForm } from "react-hook-form";
import Input from "./input";
import Button from "../button";
import bg from "../../assets/images/patterns/bg-pattern-contact.svg";

// ========== TYPES ==========
type FormFields = {
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
const Form = () => {};
