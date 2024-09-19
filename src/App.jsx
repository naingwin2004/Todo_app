import Header from "./layouts/Header.jsx"
import TodoList from "./layouts/TodoList.jsx"
import SideBar from "./layouts/SideBar.jsx"
import Footer from "./layouts/Footer.jsx"

const App = () => {
	return (
		<div className='bg-[#f1d4b3] min-h-screen font-inria w-full flex flex-col justify-center items-center'>
			<h1 className='text-black/5 md:text-7xl text-3xl text-center uppercase tracking-widest top-[-7%] inline'>
				Todo app
			</h1>
			<main className='bg-white w-[90%] lg:w-[972px]  rounded-lg shadow-lg overflow-hidden flex flex-col'>
			  	<Header />

				<div className='flex md:flex-row flex-col h-full justify-between'>
					<TodoList />

					<SideBar />
				</div>
			</main>
		    	<Footer />
		</div>
	)
}

export default App
