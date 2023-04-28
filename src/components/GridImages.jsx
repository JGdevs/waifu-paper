import {useState,useCallback} from 'react';
import {FlatList,StyleSheet,Image} from 'react-native';
import {StyledText} from './StyledText.jsx';
import StyledView from './StyledView.jsx';
import { useInfiniteQuery } from '@tanstack/react-query'
import {getImages} from '../services/images.js';

const GridImages = () => {

	const [hasMore,setHasMore] = useState(true);

	const {isLoading,isError,fetchNextPage,data:images = []} = useInfinityQuery ({

		queryKey:['images'],
		queryFn: async () => await getImages('default')

	})

	const styles = StyleSheet.create({

		containerImages:{

			

		},

		image:{

			width:'48%',
			height:300,
			marginVertical:2,
			marginHorizontal:2

		}

	})

	const renderItem = useCallback(({item,index}) => (

		<Image

		 	style={{...styles.image,backgroundColor:item.dominant_color}} 
		 	src={item.url}
		 	resizeMode="cover"

		/>

	),[]);

	function onEndReached () {


	}
	
	return (

		<StyledView style={styles.containerImages}>
			
			{images.length > 1 && 

				<FlatList

					data={images}
					renderItem={renderItem}
					numColumns={2}
					getItemLayout={(data, index) => ({length: 300, offset: 300 * index, index})}
					keyExtractor={item => item.image_id}
					removeClippedSubviews
					initialNumToRender={6}
					onEndReached={}

				/>
				
			}

			{isLoading && <StyledText>Loading</StyledText>}
			
		</StyledView>

	)

}

export default GridImages; 