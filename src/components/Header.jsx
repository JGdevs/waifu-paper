import {View,StyleSheet} from 'react-native';
import {StyledText} from './StyledText.jsx';
import Constants from 'expo-constants';
import StyledView from './StyledView.jsx';
import MenuIcon from './MenuIcon.jsx';
import SearchIcon from './SearchIcon.jsx';
import NavTab from './NavTab.jsx';

const styles = StyleSheet.create({

	header:{

		height:Constants.statusBarHeight + 40,
		justifyContent:'center',
		paddingTop:30

	},

	headerOptions:{

		height:'50%',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',

	},

	headerTitle: {

		flexDirection:'row',
		width:'38%',
		justifyContent:'space-around',

	},

	headerSearch: {

		paddingRight:10

	},

	headerTabs:{



	}

});

const Header = () => {

	return (

		<StyledView style={styles.header} child>
			
			<View style={styles.headerOptions}>

				<View style={styles.headerTitle}>
						
					<MenuIcon/>
					<StyledText>WaifuPaper</StyledText>

				</View>

				<View style={styles.headerSearch}>
					
					<SearchIcon/>

				</View>
			
			</View>

			<NavTab/>

		</StyledView>

	)

}

export default Header;