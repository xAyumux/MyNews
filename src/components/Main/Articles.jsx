import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const Articles = (props) => {
	const article = props.article;
	console.log(article);
	return (
		<a href={article.url}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="/static/images/cards/contemplative-reptile.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{article.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
							all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</a>
	);
};
