import Svg,{Rect} from 'react-native-svg';

const MenuIcon = () => {

	return (	

		<Svg viewBox="0 0 100 80" width="40" height="40">
		   <Rect width="100" height="20" rx="8"/>
		   <Rect y="30" width="100" height="20" rx="8"/>
		   <Rect y="60" width="100" height="20" rx="8"/>
		</Svg>

	)

}

export default MenuIcon;