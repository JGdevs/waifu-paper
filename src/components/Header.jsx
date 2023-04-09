import {View,StyleSheet} from 'react-native';
import {StyledText} from './StyledText.jsx';
import Constants from 'expo-constants';
import StyledView from './StyledView.jsx';
import MenuIcon from './MenuIcon.jsx';
import SearchIcon from './SearchIcon.jsx';
import NavTab from './NavTab.jsx';

const styles = StyleSheet.create({

	header:{

		height:Constants.statusBarHeight + 40

	},

	headerOptions:{

		height:'50%',
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-evenly',

	},

	containerTitle: {

		width:'90%',
		flexDirection:'row',
		alignItems:'center',
		paddingLeft:5

	},

	title:{

		paddingLeft:10

	},

	headerSearch: {

		paddingRight:10

	}



});

const Header = () => {

	return (

		<StyledView style={styles.header} child>
			
			<View style={styles.headerOptions}>
						
				<View style={styles.containerTitle}>
					
					<MenuIcon/>
					<StyledText style={styles.title} step="h3">WaifuPaper</StyledText>

				</View>

				<SearchIcon/>
			
			</View>

			<NavTab/>

		</StyledView>

	)

}

export default Header;