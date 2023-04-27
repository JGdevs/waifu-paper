import {useColorScheme} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import drawerItems from '../data/drawerItems.js';
import GridImages from './GridImages.jsx';

const MenuPanel = () => {

	const Drawer = createDrawerNavigator(),
	theme = useColorScheme();
	color = (theme === 'dark') ? '#ffffff' : '#000000';

	return (

			<Drawer.Navigator screenOptions={{

				drawerStyle:{

					backgroundColor:(theme === 'dark') ? '#121212' : '#faf7ff',
					width:250

				},

				headerStyle:{

					backgroundColor:(theme === 'dark') ? '#121212' : '#faf7ff',

				},

				headerTintColor:color,

				headerTitleStyle:{

					fontWeight:'bold'

				},

				drawerActiveTintColor:'turquoise',

				drawerLabelStyle:{

					color:color

				}	

			}}>

			{

				drawerItems.map(drawer => <Drawer.Screen 

					key={drawer.name} 
					name={drawer.name}
					options={{

						drawerIcon:() => (drawer.familyIcon === 'FontAwesome') ? <FontAwesome name={drawer.iconName} size={24} color={color}/> : <Feather name={drawer.iconName} size={24} color={color}/>

					}}

					component={GridImages}

			/>)}
				
			</Drawer.Navigator>

	)

}

export default MenuPanel;