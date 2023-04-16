import Svg,{Rect} from 'react-native-svg';

const MenuIcon = ({activeMenu = null}) => {

	return (	

		<Svg onPress={() => activeMenu()} viewBox="0 0 100 60" width="18" height="18" onPress={activeMenu}>
		   <Rect width="100" height="10" rx="8" fill="#fff"/>
		   <Rect y="30" width="100" height="10" rx="8" fill="#fff"/>
		   <Rect y="60" width="100" height="10" rx="8" fill="#fff"/>
		</Svg>

	)

}

export default MenuIcon;