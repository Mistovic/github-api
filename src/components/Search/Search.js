import React from "react";

// -- Import redux dispach hook
import { useDispatch, useSelector } from 'react-redux';

// -- Import custom actions
import {
	_users,
	searchContext,
	_loading,
	_isLoaded,
	_error,
	_frontError
}
	from '../../actions/';

// -- Custom styles
import './Search.scss';

// -- Import helper function
import CheckError from '../../helper/checkError'

/**
 * Fetch data from github API
 * 
 * @param {string} user 
 * @returns {Promise}
 */
async function searchUsers(user) {
	const response = await fetch(`https://api.github.com/search/users?q=${user}`)
	return response
}

/**
 * Renders a search form and fetch data from github API
 * 
 * 
 * @returns {JSX} Form
 */
const Search = () => {

	// -- Use dispach hook
	let dispach = useDispatch();

	// -- Get inputed value from REDUX store
	const inputValue = useSelector(state => state.searchInput);

	const handleSearch = (e) => {
		e.preventDefault();

		// -- Dont submit data if input is empty
		if (inputValue === '') {
			// -- Set frontend error
			dispach(_frontError());
			return;
		};

		// -- start loading
		dispach(_loading());

		searchUsers(inputValue)
			.then(CheckError)
			.then((response) => {
				dispach(_users(response));
				// - End loading
				dispach(_isLoaded());
				// -- Clear input field
				dispach(searchContext(''));
			})
			.catch(err => {
				err.json().then(errorMessage => {
					console.log(errorMessage);
					// -- End loading
					dispach(_isLoaded());
					// -- Set Error
					dispach(_error(errorMessage));
				})
			});
	}


	return (
		<div className="form-wrapper">
			<div className="search-form__heading">
				<h1>Explore Github</h1>
				<p>There are develpores out there to be found</p>
			</div>
			<form action="" className="search-form" onSubmit={(e) => handleSearch(e)}>
				<div className="search-form__control">
					<input
						type="text"
						name=""
						id=""
						onChange={(e) => dispach(searchContext(e.currentTarget.value))}
					/>

					<button type="submit">Search User</button>
				</div>
			</form>
		</div>
	)
}

export default Search;