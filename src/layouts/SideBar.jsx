import Button from "../components/Button.jsx"
import TodoForm from "../components/TodoForm.jsx"
const SideBar = () => {
	return (
		<section className='border-l border-black/[0.08] px-3 py-2 bg-[#fffcf9] flex flex-col justify-between'>
			<TodoForm/>
			<div className='flex flex-col gap-3 '>
				<Button btnColor="secondary">Login</Button>
				<Button btnColor="secondary">Register</Button>
			</div>
		</section>
	)
}

export default SideBar
