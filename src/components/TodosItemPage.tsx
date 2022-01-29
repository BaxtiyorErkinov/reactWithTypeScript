import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { ITodos } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

const TodosItemPage: FC = () => {
	const [todo, setTodo] = useState<ITodos | null>(null);
	const { id } = useParams();
	const navigate = useNavigate();

	async function fetchTodo() {
		try {
			const res = await axios.get<ITodos>(
				"https://jsonplaceholder.typicode.com/todos/" + id
			);
			setTodo(res.data);
		} catch (e) {
			alert(e);
		}
	}
	useEffect(() => {
		fetchTodo();
	}, []);
	return (
		<div>
			<button onClick={() => navigate("/todos")}>back</button>
			<h2>
				{todo?.id}. {todo?.title}
			</h2>
			<p>{todo?.completed ? "Completed" : "Not Completed"}</p>
		</div>
	);
};

export default TodosItemPage;
