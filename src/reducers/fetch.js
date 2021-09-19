const fetchData = (state = {}, action) => {

	// "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
	// https://api.github.com/search/users?q=m
	// -- Here we fetch Users
	// async function getUser(user) {

	// 	const response = await fetch(`https://api.github.com/users/${user}`)
	// 		.then(res => {
	// 			return res.json()
	// 		})
	// 		.then(result => {
	// 			console.log('Data ', result);
	// 		})
	// 	return response;
	// }

	// console.log('FETC REDUCER', action.data)

	switch (action.type) {
		case 'USERS':
			return action.users;
		case 'REPOS':
			return action.repos
		default:
			return state
	}

}

export default fetchData;