import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import { ITodos } from "../types/types";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodos[]>([]);
	const navigate = useNavigate();
	async function fetchTodos() {
		try {
			const res = await axios.get<ITodos[]>(
				"https://jsonplaceholder.typicode.com/todos?_limit=10"
			);
			setTodos(res.data);
		} catch (e) {
			alert(e);
		}
	}
	useEffect(() => {
		fetchTodos();
	}, []);
	return (
		<List
			items={todos}
			renderItem={(todo: ITodos) => (
				<TodoItem
					onClick={(todo) => navigate("/todos/" + todo.id)}
					todo={todo}
					key={todo.id}
				/>
			)}
		/>
	);
};

export default TodosPage;
