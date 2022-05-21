import React from "react";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

export const Main = (props) => {
	const user = props.user;

	return (
		<div>
			<Sidebar contents={<Articles />} />
		</div>
	);
};
