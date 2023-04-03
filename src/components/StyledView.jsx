import {View,useColorScheme,StyleSheet} from 'react-native';

const StyledView = ({children,style,child}) => {

	const theme = useColorScheme(),

	styles = StyleSheet.create({

		container:{

			backgroundColor:(child) ? (theme === 'dark') ? '#181818' : '#faf7ff' : (theme === 'dark') ? '#0b0b0b' : '#ffffff'

		} 

	}),

	viewStyle = [

		styles.container,
		style

	]

	return (

		<View style={viewStyle}>
			
			{children}

		</View>

	)

}

export default StyledView;