import Button from "../components/Button.jsx"

const SideBar = () => {
	return (
		<section className='border-l border-black/[0.08] px-3 py-2 bg-[#fffcf9] flex flex-col justify-between'>
			<form className='flex flex-col gap-2 justify-between mb-20'>
				<h1 className='font-bold'>Add todo </h1>
				<input
					type='text'
					className='border border-black/9 rounded pl-3 py-2'
				/>
				<Button>Add to list</Button>
			</form>
			<div className='flex flex-col gap-3 '>
				<Button btnColor="secondary">Login</Button>
				<Button btnColor="secondary">Register</Button>
			</div>
		</section>
	)
}

export default SideBar
