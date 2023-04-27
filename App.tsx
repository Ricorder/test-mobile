import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import store, { persistor } from './src/redux/store';
import Articles from './src/screens/Articles/Articles';
import Article from './src/screens/Article/Article';

export type propsStack = NativeStackNavigationProp<StackParamList>
export type StackParamList = {
	Articles: undefined;
	Article: {
		id: number,
	};
}
const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

function App(): JSX.Element {
	const screenOptions = {
		headerShown: false
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaView>
					<StatusBar/>
				</SafeAreaView>
				<NavigationContainer>
					<Navigator initialRouteName='Articles' screenOptions={screenOptions} >
						<Screen name="Articles" component={Articles} options={screenOptions} />
						<Screen name="Article" component={Article} options={screenOptions} />
					</Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({});

export default App;
