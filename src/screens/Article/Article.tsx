import { Text, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../App';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { useEffect, memo } from 'react';
import { fetchArticle } from '../../redux/slices/currentArticleSlice';

interface ArticleType extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };

const Article = ({ route, navigation }: ArticleType): JSX.Element => {
	const dispatch = useAppDispatch()
	const currentArticle = useAppSelector(state => state.currentArticle)
	
	useEffect(() => {
		dispatch(fetchArticle(route.params.id))
	}, [dispatch])
	const comeBackHandler = (): void => {
		navigation.goBack();
	}
	return (
		<>
			<View style={styles.item}>
				<Text style={styles.title}>{currentArticle.title}</Text>
				<Text>{currentArticle.body}</Text>
			</View>
			<Text onPress={comeBackHandler} style={styles.back}>Back</Text>
		</>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		color: 'black',
		borderRadius: 5
	},
	title: {
		fontSize: 32,
	},
	back: {
		fontSize: 32,
		textAlign: 'center'
	}
});

export default memo(Article);
