const searchInput = (state = "", action) => {

	// console.log('Reducer ', action.user)

	switch(action.type) {
		case "SEARCH-INPUT":
			return action.user;
		default: 
			return state;
	}

}

export default searchInput;