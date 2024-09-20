import EditIcon from "../components/EditIcon.jsx";
import { useTodosContext } from "../hook/useTodosContext.js";
const EditTodo = ({ todo }) => {
	const { setTodoContent, setEditingTodoId } = useTodosContext();
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				setTodoContent(todo.text);
				setEditingTodoId(todo.id);
			}}>
			<EditIcon />
		</button>
	);
};

export default EditTodo;
