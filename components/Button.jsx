const Button = ({children,btnColor}) => {
	return (
		<button className={`text-center bg-[#473a2b] rounded w-full py-1.5 text-white md:hover:bg-[#322618] active:bg-[#322618] scale-1 active:scale-95 md:hover:scale-95 transition duration-75 ${btnColor && "text-[14px] opacity-[0.85]"}`}>
			{children}
		</button>
	)
}

export default Button
