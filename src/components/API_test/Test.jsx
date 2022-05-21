import axios from "axios";
import React from "react";

// keywords => ["React", "Python", "Javascript"]
export const Test = (props) => {
	// keywords[リスト]
	const keywords = props.keywords;

	// url postのurl
	const url = "https://mynews-backend-0521.herokuapp.com/articles/yahoonews"

	// json型のarticles
	const [articles, setArticles] = React.useEffect();

	const GetArticles = () => {
		axios.post(url, {
			data: keywords
		}).then((res) => {
			// console.log(res.data);
			setArticles(res.data);
		});
	};
	
	return (
		<div>
			<div>
				Get API test
				<button onClick={GetArticles}>Get Articles</button>
			</div>
			{/* mapでarticlesをまわす */}
			{articles.map(article => {
				// components カード形式 <Card articles = article />
				// article.titleにタイトル, article.urlにURLが入ってる。今の所画像はなし
				return(<div>{article.title}</div>)
			})}
		</div>
	);
};
