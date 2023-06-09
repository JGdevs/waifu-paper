import {View,useColorScheme,StyleSheet} from 'react-native';

const StyledView = ({children,style,child,...restOfProps}) => {

	const theme = useColorScheme(),

	styles = StyleSheet.create({

		container:{

			backgroundColor:(child) ? (theme === 'dark') ? '#121212' : '#faf7ff' : (theme === 'dark') ? '#000000' : '#ffffff'

		} 

	}),

	viewStyle = [

		styles.container,
		style

	]

	return (

		<View style={viewStyle} {...restOfProps}>
			
			{children}

		</View>

	)

}

export default StyledView;