import * as React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

import { Articles } from "./Articles";

const drawerWidth = 200;

export default function Sidebar() {
	const [open, setOpen] = React.useState(false);
	const [keyword, setKeyword] = React.useState();
	const [keywords, setKeywords] = React.useState([]);
	const [articles, setArticles] = React.useState();

	// axiosを用いてapiを叩く。postメソッド
	const url = "https://mynews-backend-0521.herokuapp.com/articles/yahoonews";

	React.useEffect(() => {
		axios
			// .post(url, {
			// 	keywords: keywords,
			// })
			.get(url)
			.then((res) => {
				// console.log(Object.entries(res.data)[1][1]);
				setArticles(Object.entries(res.data));
			});
	}, [keywords]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const GetKeyword = (e) => {
		setKeyword(e.target.value);
	};

	// close & set keyword
	const handleClose = () => {
		setOpen(false);
		setKeywords([...keywords, keyword]);
	};
	const handleClose2 = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						{keywords.map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
								{/* ここから削除ボタン */}
							<IconButton aria-label="delete" size="small">
									<ClearIcon fontSize="inherit" />
								</IconButton>
							</ListItem>
						))}
						<ListItem disablePadding>
							<ListItemButton onClick={handleClickOpen}>
								<ListItemText primary="Add Keyword" />
							</ListItemButton>
							<Dialog open={open} onClose={handleClose}>
								<DialogTitle>Add New Keyword</DialogTitle>
								<DialogContent>
									<DialogContentText>
										If you want to get more information, enter new keyword here.
									</DialogContentText>
									<TextField
										onChange={GetKeyword}
										autoFocus
										margin="dense"
										id="keyword"
										label="new keyword"
										type="keyword"
										fullWidth
										required
										variant="standard"
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose2}>Cancel</Button>
									<Button onClick={handleClose}>Add</Button>
								</DialogActions>
							</Dialog>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			<Grid container
			sx={{
				borderRadius: 1,
				flexWrap: 'wrap',
				}}>
			{articles ? (
				articles.map((article) => {
					return <Articles article={article[1]} />;
				})
			) : (
				<div></div>
			)}
			</Grid>
		</Box>
	);
}
