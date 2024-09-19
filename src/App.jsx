import Header from "../layouts/Header.jsx"
import TodoList from "../layouts/TodoList.jsx"
import SideBar from "../layouts/SideBar.jsx"

const App = () => {
	return (
		<div className='bg-[#f1d4b3] min-h-screen font-inria w-full flex flex-col justify-center items-center'>
			<h1 className='text-black/5 md:text-7xl text-3xl text-center uppercase tracking-widest top-[-7%] inline'>
				Todo app
			</h1>
			<main className='bg-white w-[90%] lg:w-[972px] h-96 rounded-lg shadow-lg overflow-hidden flex flex-col'>
				<Header />

				<div className='flex md:flex-row flex-col h-full justify-between'>
					<TodoList />

					<SideBar />
				</div>
			</main>
			<div className='flex justify-between text-xs font-bold w-[90%] lg-w-[972px] mt-3 opacity-25'>
				<p>&copy; 2024 Copyright by NaingWin</p>
				<p> version 1.1</p>
			</div>
		</div>
	)
}

export default App
