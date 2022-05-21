import React from "react";
import Sidebar from './Sidebar';

export const Main = (props) => {
	const user = props.user;
	return (
		<div>
			<Sidebar />
		</div>
	);
};
