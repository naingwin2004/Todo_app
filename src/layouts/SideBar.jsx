import Button from "../components/Button.jsx";
import TodoForm from "../components/TodoForm.jsx";
// kinde auth
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const SideBar = () => {
	const { login, register, logout, isAuthenticated, user, isLoading } =
		useKindeAuth();
	return (
		<section className='border-l border-black/[0.08] px-3 py-2 bg-[#fffcf9] flex flex-col justify-between'>
			<TodoForm />
			<div className='flex flex-col gap-3'>
				{isLoading ? (
					<p className='text-xl'>Loading ...</p>
				) : isAuthenticated ? (
					<div>
						<p className='text-sm'>
							{user?.email || user?.username}
						</p>

						<Button onClick={logout}>Logout</Button>
					</div>
				) : (
					<>
						<Button
							btnColor='secondary'
							onClick={login}>
							Login
						</Button>
						<Button
							btnColor='secondary'
							onClick={register}>
							Register
						</Button>
					</>
				)}
			</div>
		</section>
	);
};

export default SideBar;
