import {StyledText} from './StyledText.jsx';
import {View,StyleSheet} from 'react-native';

const Tabs = ({to,children,style}) => {

	const styles = StyleSheet.create({

		text:{

			color:'#fff',
			marginLeft:3,
			marginRight:3,
			paddingHorizontal:10

		},

		active:{

			color:'blue'

		}

	}),

	stylesActive = [

		styles.text,

	];

	return (

		<View to={to} style={style}>

			<StyledText step="h4">
			
				{children}

			</StyledText>

		</View>

	)

}

export default Tabs;