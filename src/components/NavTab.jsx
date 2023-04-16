import {StyleSheet,ViewPropTypes,View,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import StyledView from './StyledView.jsx';
import Tabs from './Tabs.jsx';

const NavTab = () => {

	const styles = StyleSheet.create({

		container:{

			flexDirection:'row',
			justifyContent:'space-around',
			alignItems:'center',
			height:Constants.statusBarHeight + 20,
			borderColor:'#adb5bd',
			borderTopWidth:1

		},

		textTabs:{

			marginLeft:10

		}

	})

	return (

		<StyledView style={styles.container} child>
			
			<ScrollView horizontal>
				
				<Tabs style={styles.textTabs} to="/">Home</Tabs>
				<Tabs style={styles.textTabs} to="/">Favorites</Tabs>

			</ScrollView>

		</StyledView>

	)

}

export default NavTab;