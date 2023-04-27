interface Article {
	id: number,
	title: string,
	body: string
}

interface State {
	articles: Article[],
	currentArticle: Article
}
const initState = (): State => {
	const state  = {
		articles: [],
		currentArticle: {
			id: 0,
			title: '',
			body: ''
		}
	}
	return state
}

export default initState
