import * as React from "react";
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

const drawerWidth = 200;

export default function Sidebar(props) {
	const [open, setOpen] = React.useState(false);
	const [keyword, setKeyword] = React.useState();
	const [keywords, setKeywords] = React.useState([]);

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
										variant="standard"
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose}>Cancel</Button>
									<Button onClick={handleClose}>Subscribe</Button>
								</DialogActions>
							</Dialog>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			{props.contents}
		</Box>
	);
}
