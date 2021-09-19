const error = (state = '', action) => {

	// console.log('Reducer ', action.user)

	switch (action.type) {
		case "ERROR":
			return action.message;
		case "EMPTY":
			return "Input field need some info!"
		default:
			return '';
	}

}

export default error;