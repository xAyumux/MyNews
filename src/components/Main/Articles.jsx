import * as React from "react";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const Articles = (props) => {
	const article = props.article;
	console.log(article);
	return (
	<Box 
	sx={{
		display: 'flex',
		flexWrap: 'wrap',
		borderRadius: '10px',
		}}>
			<a href={article.url}>
			<Card sx={{ width: 500,
						height: 300,
						display: 'flex',
						mr: 5
						}}>
				<Box sx={{ display: 'flex' }}>
					<CardActionArea>
						<CardContent>
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
							alt="画像"/>{/* 画像を入れるならここ */}
						</CardContent>
					</CardActionArea>
				</Box>
			</Card>
		</a>
	</Box>
	);
};
