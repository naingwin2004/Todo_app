import { useState } from "react";

import Button from "../components/Button.jsx";

import { useTodosContext } from "../hook/useTodosContext.js";
const TodoForm = () => {
	const { addTodo, todoContent, setTodoContent, editingTodoId, editTodo } =
		useTodosContext();

	const handleForm = (e) => {
		e.preventDefault();
		const trimContent = todoContent.trim()
		if(!trimContent){
		  return
		}
		if (editingTodoId) {
			editTodo(editingTodoId, todoContent);
		} else {
			addTodo(todoContent);
		}
		setTodoContent("");
	};
	return (
		<form
			className='flex flex-col gap-2 justify-between mb-20'
			onSubmit={handleForm}>
			<h1 className='font-bold'>Add todo </h1>
			<input
				type='text'
				className='border border-black/9 rounded pl-3 py-2'
				value={todoContent}
				onChange={(e) => {
					setTodoContent(e.target.value);
				}}
			/>
			<Button>Add to list</Button>
		</form>
	);
};

export default TodoForm;
