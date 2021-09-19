const loading = (state = false, action) => {

	// console.log('Reducer ', action.user)

	switch (action.type) {
		case "LOADING":
			return "loading";
		case "LOADED":
			return "loaded";
		default:
			return state;
	}

}

export default loading;