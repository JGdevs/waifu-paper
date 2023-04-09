import axios from 'axios';

const instance = axios.create({

	baseURL:'https://api.waifu.im/'

});

async function getRamdonImage (url) {

	const url = 'search/';

	try {

		const {data} = await instance.get(url);

		console.log(data.images);

		return data.images; 

	}

	catch (error) {

		console.log(error);

	}

}

console.log(getImages());