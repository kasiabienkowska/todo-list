import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { TodoForm } from "./TodoForm";

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
	min-width: 800px;
`;

const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px white solid;
	margin-top: 100px;
	width:50%;
	height: 80%;
	color:white;
	min-width: 800px;
`;



function ListToDo() {
	const [todos, setTodos] = useState([]);
	const addToDo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return alert ('field cannot be empty')
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});

		setTodos(updatedTodos);
	};

	return (
		<Container>
			<ContentDiv>
				<div>
					<h1>Todo List</h1>
				</div>
				<TodoForm onSubmit={addToDo}></TodoForm>
				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				></Todo>
			</ContentDiv>
		</Container>
	);
}

export default ListToDo;
