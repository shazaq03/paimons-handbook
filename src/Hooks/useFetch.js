import axios from "axios";

export default async function useFetch(url) {
	let DATA = await axios
		.get(url)
		.then((response) => {
			// console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return DATA;
}
