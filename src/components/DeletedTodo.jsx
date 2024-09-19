import { useTodosContext } from "../hook/useTodosContext.js"

const DeletedTodo = ({id}) => {
	const { deleteTodo } = useTodosContext()
	return (
		<button
			onClick={(e) => {
				e.stopPropagation()
				deleteTodo(id)
			}}
			className='hover:bg-blue-600'>
			❌
		</button>
	)
}

export default DeletedTodo
