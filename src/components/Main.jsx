import {View,Text,useColorScheme,StyleSheet,StatusBar} from 'react-native';
import GridImages from './GridImages.jsx';
import Header from './Header.jsx';
import {StyledText} from './StyledText.jsx';

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

		<View style={mainStyles}>
			
			<StatusBar/>
			<Header/>
			<GridImages/>
			<StyledText>{theme}</StyledText>

		</View>

	)

}

export default Main;