import { createContext, useState, useEffect } from "react"
export const TodosContext = createContext(null)

const initialTodo = []

const TodosContextProvider = ({ children }) => {
	// state
	const [todos, setTodos] = useState(initialTodo)

	// deleteTodo function
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}
	//check compleate
	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo,
			),
		)
	}
	//addTodo
	const addTodo = (content) => {
		if (todos.length >= 3) {
			alert("To add more todos, please log in.")
			return;
		}
		setTodos([
			...todos,
			{ id: todos.length + 1, text: content, isCompleted: false },
		])
	}
	return (
		<TodosContext.Provider
			value={{ todos, deleteTodo, toggleTodo, addTodo }}>
			{children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider
