import {View,StyleSheet} from 'react-native';
import {StyledText} from './StyledText.jsx';
import Constants from 'expo-constants';
import StyledView from './StyledView.jsx';
import MenuIcon from './MenuIcon.jsx';

const styles = StyleSheet.create({

	header:{

		alignItems:'center',
		justifyContent:'space-between',
		paddingTop:Constants.statusBarHeight + 40

	}

});

const Header = () => {

	return (

		<StyledView style={styles.header} child>
			
			<MenuIcon/>

		</StyledView>

	)

}

export default Header;