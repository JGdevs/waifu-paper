import {useColorScheme,StatusBar} from 'react-native';
import GridImages from './GridImages.jsx';
import Header from './Header.jsx';
import {NavigationContainer} from '@react-navigation/native';
import StyledView from './StyledView.jsx';
import MenuPanel from './MenuPanel.jsx';

const Main = () => {

	return (

		<NavigationContainer>	

			<StyledView style={{flex:1}}>
			
				<StatusBar/>
				<MenuPanel/>

			</StyledView>

		</NavigationContainer>	

	)

}

export default Main;