import axios from 'axios';

const instance = axios.create({

	baseURL:'https://api.waifu.im/'

});

async function getRamdonImages () {

	const url = 'search/?order_by=random&many=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images; 

	}

	catch (error) {

		console.log(error);

	}

}

async function getFavoritesImages () {

	const url = 'search/?order_by=favorites&many=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images;

	}

	catch (error) {

		console.log(error)

	}

}

async function getNsfwImages () {

	const url = 'search/?is_nsfw=true&many=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images;

	}

	catch (error) {

		console.log(error);

	}


} 

export {getRamdonImages};
export {getFavoritesImages};
export {getNsfwImages};