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

async function getLandscapeImages () {

	const url = '/search/?orientation=LANDSCAPE&many=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images;

	}

	catch (error) {

		console.log(error);

	}

}

async function getAnimeGif () {

	const url = '/search/?gif=true&many=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images;

	}

	catch (error) {

		console.log(error);

	}

}

async function getNsfwGif () {

	const url = '/search/?gif=true&many=true&is_nsfw=true';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images;

	}

	catch (error) {

		console.log(error);

	}

}

async function selfCustomSearch (url) {

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
export {getLandscapeImages};
export {getNsfwImages};
export {getAnimeGif};
export {selfCustomSearch};
