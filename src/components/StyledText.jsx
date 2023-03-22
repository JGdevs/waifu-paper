import {useColorScheme,StyleSheet,Text} from 'react-native';

const styles = StyleSheet.create({

	themeDarkText:{

		color:'#fff'

	},

	themeLightText:{

		color:'#000'

	}

});

const StyledText = ({children,color}) => {

	const theme = useColorScheme();

	const textStyles = [

		theme === 'dark' && styles.themeDarkText,
		theme === 'light' && styles.themeLightText,
		color && {color}
	]

	return (

		<Text style={textStyles}>
			
			{children}

		</Text>

	)

}

export {StyledText}  