import axios from "axios";

export const Test = () => {
	const GetArticles = () => {
		axios.get("https://mynews-backend-0521.herokuapp.com/articles/yahoonews").then((res) => {
			console.log(res);
		});
	};

	return (
		<div>
			<div>
				Get API test
				<button onClick={GetArticles}>Get Articles</button>
			</div>
		</div>
	);
};
