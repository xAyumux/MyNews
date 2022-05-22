import React from "react";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Header = (props) => {
	const user = props.user;
	const navigate = useNavigate();

	// google login function
	const GoogleLogin = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	};

	// google logout function
	const GoogleLogout = () => {
		firebase.auth().signOut();
		navigate("/");
	};

	return (
		<div>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						MyNews
					</Typography>
					<div style={{ flexGrow: 1 }}></div>
					{user ? (
						<Button onClick={GoogleLogout} variant="contained">
							Log out
						</Button>
					) : (
						<Button onClick={GoogleLogin} variant="contained">
							Sign in
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<div>Headerだよ</div>
			{user ? <button onClick={GoogleLogout}>LogOut</button> : <button onClick={GoogleLogin}>LogIn</button>}
		</div>
	);
};
