import {useTodosContext} from "../hook/useTodosContext.js";

const Header = () => {
 const {todos}= useTodosContext()
 const compleatedTodo = todos.filter(todo=>todo.isCompleted).length
    return (
        <header className="flex justify-between px-3 py-2  border-b border-black/8 items-center">
            <p className="font-bold text-2xl tracking-widest">...</p>
            <p>
                <b>{compleatedTodo}</b> / {todos.length} compleated
            </p>
        </header>
    );
};

export default Header;
