// -- This action is used to store input value of search input
export const searchContext = (user) => {
	return {
		type: 'SEARCH-INPUT',
		user: user,
	}
}

// -- This action is used to store search results
export const _users = (data) => {
	return {
		type: 'USERS',
		users: data
	}
}

// -- This action is used to store required username
export const _idUsername = (user) => {
	return {
		type: 'USER',
	}
}

// -- This action is used to store repository data
export const _repos = (data)=> {
	return {
		type: 'REPOS',
		repos: data
	}
}

// -- This action is used to store loading state
export const _loading = () => {
	return {
		type: 'LOADING',
	}
}

// -- This action is used to store loading state
export const _isLoaded = () => {
	return {
		type: 'LOADED',
	}
}

// -- This action is used to store server error
export const _error = (msg) => {
	return {
		type: 'ERROR',
		message: msg
	}
}

// This action is used to store frontend error
export const _frontError = () => {
	return {
		type: 'EMPTY'
	}
}
