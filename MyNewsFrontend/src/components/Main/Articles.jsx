import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";

export const Articles = (props) => {
	const article = props.article;
	console.log(article);
	return (
		<Grid item >
		<Card 
		sx={{ width: 250,
			height: 150,
			display: 'flex',
			m: 4
			}}>
			<CardActionArea>
				<CardContent>
					<a href={article.url}>
					<Typography variant="h10" component="div">
						{article.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{/* {article.content} 内容を入れるならここ*/}
					</Typography>
					<CardMedia
					component="img"
					height="140"
					image={article.img}
					alt="画像"/>
					</a>
				</CardContent>
			</CardActionArea>
		</Card>
		</Grid>
	);
};
