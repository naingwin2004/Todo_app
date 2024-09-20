import { createContext, useState, useEffect } from "react";
export const TodosContext = createContext(null);

const TodosContextProvider = ({ children }) => {
	//get todos from localStorage
	const initialTodos = () => {
		const saveTodos = localStorage.getItem("todos");
		if (saveTodos) {
			return JSON.parse(saveTodos);
		}
		return [];
	};
	// state
	const [todos, setTodos] = useState(initialTodos);
	const [todoContent, setTodoContent] = useState("");
const [editingTodoId, setEditingTodoId] = useState(null);

	// deleteTodo function
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
// editTodo
const editTodo = (id, content) => {
  setTodos(todos.map((todo) => 
    todo.id === id ? { ...todo, text: content } : todo
  ));
  setEditingTodoId(null); // reset after editing
  setTodoContent(""); // clear input after edit
};
	//check compleate
	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo,
			),
		);
	};
	//addTodo
	const addTodo = (content) => {
		if (todos.length >= 3) {
			alert("To add more todos, please log in.");
			return;
		}
		setTodos([
			...todos,
			{ id: todos.length + 1, text: content, isCompleted: false },
		]);
	};
	//set localStorage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	return (
		<TodosContext.Provider
			value={{
				todos,
				deleteTodo,
				toggleTodo,
				addTodo,
				todoContent,
				setTodoContent,
				editingTodoId,
				setEditingTodoId,
				editTodo
			}}>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
