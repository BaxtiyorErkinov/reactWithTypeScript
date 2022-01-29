import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: FC = () => {
	const [users, setUser] = useState<IUser[]>([]);

	async function fetchUsers() {
		try {
			const res = await axios.get<IUser[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setUser(res.data);
		} catch (e) {
			alert(e);
		}
	}

	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<List
			items={users}
			renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
		/>
	);
};

export default UsersPage;
