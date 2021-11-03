import React, { useState } from "react";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import styled from "styled-components";
import { TodoForm } from "./TodoForm";

const ListDiv = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const TextDiv = styled.div`
	color: black;
	border: 3px solid white;
	margin: 15px;
	width: 55%;
	height: 30px;
	padding-top: 10px;
	padding-left: 10px;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	font-size: 24px;
	cursor: pointer;
`;

const InputCompleted = styled.input`
	height: 30px;
	width: 30px;
`;

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<ListDiv key={index}>
			<TextDiv key={todo.id} onClick={() => completeTodo(todo.id)}
			style={{textDecoration: !todo.isComplete ? "" : "line-through" }}>
				{todo.text}
			</TextDiv>
			<Icons>
				<AiFillCloseCircle
					size={40}
					color={"red"}
					onClick={() => removeTodo(todo.id)}
				/>
				<AiFillEdit
					size={40}
					color={"blue"}
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
				/>
				<InputCompleted
					type="checkbox"
					id="completed"
					checked={todo.isComplete}
					onChange={() => completeTodo(todo.id)}
				/>
			</Icons>
		</ListDiv>
	));
}

export default Todo;
