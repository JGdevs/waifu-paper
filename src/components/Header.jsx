import {View,StyleSheet} from 'react-native';
import {StyledText} from './StyledText.jsx';
import Constants from 'expo-constants';

const styles = StyleSheet.create({

	header:{

		alignItems:'center',
		justifyContent:'space-between',
		paddingTop:Constants.statusBarHeight + 40,
		backgroundColor:'#f00'

	}

});

const Header = () => {

	return (

		<View style={styles.header}>
			
			<StyledText color='blue'>Header</StyledText>

		</View>

	)

}

export default Header;