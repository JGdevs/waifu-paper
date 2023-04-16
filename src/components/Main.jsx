import {View,Text,useColorScheme,StyleSheet,StatusBar} from 'react-native';
import GridImages from './GridImages.jsx';
import Header from './Header.jsx';
import {StyledText} from './StyledText.jsx';
import {NavigationContainer} from '@react-navigation/native';
import MenuPanel from './MenuPanel.jsx';


const styles = StyleSheet.create({

	default:{

		flex:1,
		color:'#101010',
		backgroundColor:'#efefef'

	},

	dark:{

		color:'#f9f9f9',
		backgroundColor:'#030303'

	}

});

const Main = () => {

	const theme = useColorScheme(),

	isDarkTheme = theme === 'dark',

	mainStyles = [

		styles.default,
		isDarkTheme && styles.dark

	];

	return (

		<NavigationContainer>	

			<View style={mainStyles}>
			
				<StatusBar/>
				<MenuPanel/>

			</View>

		</NavigationContainer>	

	)

}

export default Main;