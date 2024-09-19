import { createContext, useState, useEffect } from "react"
export const TodosContext = createContext(null)

const initialTodo = [
	{ id: 1, text: "Get a girlfriend", isCompleted: false },
	{ id: 2, text: "Buy a Laptop", isCompleted: false },
	{ id: 3, text: "Go outside", isCompleted: true },
]

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

	return (
		<TodosContext.Provider value={{ todos, deleteTodo ,toggleTodo}}>
			{children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider
