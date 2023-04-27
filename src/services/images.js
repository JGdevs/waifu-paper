import axios from 'axios';

const instance = axios.create({

	baseURL:'https://api.waifu.im/'

});

const endpoints = {

	default:'search/?many=true&byte_size=<=1000000',
	favorites:'search/?order_by=favorites&many=true',
	nsfw:'search/?is_nsfw=true&many=true',
	landscape:'/search/?orientation=LANDSCAPE&many=true',
	gif:'/search/?gif=true&many=true',
	gifNsfw:'/search/?gif=true&many=true&is_nsfw=true'

}

export async function getImages (endpoint) {

	try {

		const {data} = await instance.get(endpoints[endpoint]);
		return data.images; 

	}

	catch (error) {

		return error;

	}

}

async function selfCustomSearch (url) {

	try {

		const {data} = await instance.get(url);
		return data.images;

	}

	catch (error) {

		return error;

	}	

}