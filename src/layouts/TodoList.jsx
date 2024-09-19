import { useState } from "react"

//components
import DeletedTodo from "../components/DeletedTodo.jsx"
//hook
import { useTodosContext } from "../hook/useTodosContext.js"
const TodoList = () => {
	const { todos, toggleTodo } = useTodosContext()
	return (
		<ul className='w-full'>
			{todos.length === 0 && (
				<p className='flex justify-center items-center font-bold text-2xl h-full border-b border-black/5 py-2 md:border-none '>
					Somthing write here
				</p>
			)}
			{todos.map((todo) => (
				<li
					key={todo.id}
					className='border-b border-black/5 flex justify-between px-3 py-1'>
					<p
						className={`${
							todo.isCompleted && "line-through opacity-30"
						} w-full cursor-pointer`} onClick={()=>toggleTodo(todo.id)}>
						{todo.text}
					</p>
					<DeletedTodo id={todo.id} className="cursor-pointer" />
				</li>
			))}
		</ul>
	)
}

export default TodoList
