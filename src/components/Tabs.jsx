import {Link,useLocation} from 'react-router-native';
import {StyledText} from './StyledText.jsx';
import {StyleSheet} from 'react-native';

const Tabs = ({to,children,style}) => {

	const {pathname} = useLocation(),

	active = pathname === to,

	styles = StyleSheet.create({

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
		active && styles.active

	];

	return (

		<Link to={to} style={style}>

			<StyledText step="h4">
			
				{children}

			</StyledText>

		</Link>

	)

}

export default Tabs;