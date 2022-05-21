import React from "react";
import firebase from "./firebase";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main/Main";

export const Routers = () => {
	const [user, setUser] = React.useState();

	// user取得
	React.useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return (
		<BrowserRouter>
			<div className="sticky top-0 z-50">
				<Header user={user} />
			</div>
			<Routes>
				<Route path="/" element={<Main user={user} />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
