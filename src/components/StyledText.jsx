import {useColorScheme,StyleSheet,Text} from 'react-native';
import {fontSizes} from '../styles/fontSizes.js';

const styles = StyleSheet.create({

	themeDarkText:{

		color:'#fff'

	},

	themeLightText:{

		color:'#000'

	}

});

const StyledText = ({children,color,step,style}) => {

	const theme = useColorScheme();

	const textStyles = [

		theme === 'dark' && styles.themeDarkText,
		theme === 'light' && styles.themeLightText,
		color && {color},
		step && {fontSize:fontSizes[step]},
		style

	]

	return (

		<Text style={textStyles}>
			
			{children}

		</Text>

	)

}

export {StyledText}  