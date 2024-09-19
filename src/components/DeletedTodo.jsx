import { useTodosContext } from "../hook/useTodosContext.js";

import Mark from "../components/MarkIcon.jsx";
const DeletedTodo = ({ id }) => {
	const { deleteTodo } = useTodosContext();
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				deleteTodo(id);
			}}
			>
			<Mark />
		</button>
	);
};

export default DeletedTodo;
