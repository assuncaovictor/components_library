import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button = (props: ButtonProps) => {
	return <MuiButton {...props}>Botão da lib</MuiButton>;
};
