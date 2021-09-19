/**
 * Helper function for handling errors
 * 
 * @param {promise} response 
 * @returns 
 */
const CheckError = (response) => {
	if (response.status >= 200 && response.status <= 299) {
		return response.json();
	} else {
		throw response;
	}
}

export default CheckError;
