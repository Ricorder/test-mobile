import { Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../App';

interface ShortArticleType {
	id: number,
	title: string,
	body: string,
}

const ShortArticle = ({ id, title, body }: ShortArticleType): JSX.Element => {
	const { navigate } = useNavigation<propsStack>()
	const passToArticle = async (): Promise<void> => {
		navigate('Article', {
			id,
		});
	}
	return (
		<Pressable style={styles.item}  onPress={passToArticle}>
			<Text style={styles.title} numberOfLines={1} >{title}</Text>
			<Text numberOfLines={1} >{body}</Text>
		</Pressable>
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
});

export default ShortArticle;
