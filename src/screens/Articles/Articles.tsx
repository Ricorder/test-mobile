import { View, FlatList, StyleSheet, StatusBar, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import ShortArticle from '../../components/ShortArticle/ShortArticle';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchArticles } from '../../redux/slices/articlesSlice';

interface ArticleType {
	userId: number,
	id: number,
	title: string,
	body: string,
}

const Articles = (): JSX.Element => {
	const [textInput, setTextInput] = useState<string>('');
	const dispatch = useAppDispatch()
	const articles = useAppSelector(state => state.articles)
	const [listArticles, setlistArticles] = useState<ArticleType[]>(articles);

	useEffect(() => {
		dispatch(fetchArticles())
	}, [dispatch])

	useEffect(() => {
		const textRegexp = new RegExp(`^${textInput}.*`, 'i')
		const searchedArticles = articles.filter((article: ArticleType) => textRegexp.test(article.title))
		setlistArticles(searchedArticles)
	}, [textInput])
	return (
		<>
		<View>
			<TextInput style={styles.input} onChangeText={setTextInput} placeholder='Поиск по названию'></TextInput>
		</View>
		<View style={styles.container}>
			<FlatList
				data={listArticles}
				renderItem={({item}) => <ShortArticle id={item.id} title={item.title} body={item.body} />}
				keyExtractor={item => item.id}
			/>
		</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
	},
	input: {
		borderWidth: 1,
		borderRadius: 5,
		marginHorizontal: 16,
		marginTop: 16,
		padding: 20,
		fontSize: 32,
	}
});

export default Articles;
