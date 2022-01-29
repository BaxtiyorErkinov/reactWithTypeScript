import React, { FC } from "react";
import { ITodos } from "../types/types";

interface TodoItemProps {
	todo: ITodos;
	onClick: (todo: ITodos) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
	return (
		<div onClick={() => onClick(todo)} style={{ cursor: "pointer" }}>
			<input type="checkbox" checked={todo.completed} />
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;
