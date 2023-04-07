import Svg,{Rect} from 'react-native-svg';

const MenuIcon = () => {

	return (	

		<Svg viewBox="0 0 100 80" width="20" height="20">
		   <Rect width="100" height="10" rx="8" fill="#fff"/>
		   <Rect y="30" width="100" height="10" rx="8" fill="#fff"/>
		   <Rect y="60" width="100" height="10" rx="8" fill="#fff"/>
		</Svg>

	)

}

export default MenuIcon;