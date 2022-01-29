import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserListItemProp {
	user: IUser;
}

const UserItem: FC<UserListItemProp> = ({ user }) => {
	return (
		<div style={{ padding: "10px", border: "1px solid grey" }}>
			{user.id}. {user.name} he's from {user.address.city}
		</div>
	);
};

export default UserItem;
