import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DivInputAdd = styled.div`
	width: 100%;
`;

const InputAdd = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: black;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 400px;
	height: 30px;
`;

const ButtonAdd = styled.button`
	background-color: white;
	border: none;
	color: black;
	padding: 12px 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin-left: 15px;
	:hover {
		background-color: black;
		color: white;
	}
`;

const DivInputEdit = styled.div`
	width: 100%;
`;

const InputEdit = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: black;
	background: pink;
	border: none;
	border-radius: 3px;
	width: 200px;
	height: 30px;
`;
const ButtonEdit = styled.button`
	background-color: white;
	border: none;
	color: black;
	padding: 12px 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin-left: 15px;
	:hover {
		background-color: black;
		color: white;
	}
`;

export function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputFocus = useRef(null);

	useEffect(() => {
		inputFocus.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			{props.edit ? (
				<DivInputEdit>
					<InputEdit
						placeholder="Please edit your item"
						value={input}
						onChange={handleChange}
						name="text"
						ref={inputFocus}
					/>
					<ButtonEdit onClick={handleSubmit}>Edit</ButtonEdit>
				</DivInputEdit>
			) : (
				<DivInputAdd>
					<InputAdd
						placeholder="Please add your task"
						value={input}
						onChange={handleChange}
						name="text"
						ref={inputFocus}
					/>
					<ButtonAdd onClick={handleSubmit}>Add your task</ButtonAdd>
				</DivInputAdd>
			)}
		</form>
	);
}
