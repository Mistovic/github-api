import React from 'react';

// -- REDUX setup
import { useSelector } from 'react-redux';

// -- Custom components
import UserCard from '../../components/UserCard/UserCard';
import Search from '../../components/Search/Search';

// -- Custom Styleshets
import './UserList.scss';

/**
 * UserList component will display list of all users
 * and search component will be displayed here
 */
const UserList = () => {

	// -- Here we get the data
	const dataUsers = useSelector(state => state.fetchData);

	// -- Loading state
	const isLoaded = useSelector(state => state.loading);

	// -- Error
	const error = useSelector(state => state.error);
	const { message } = error;

	if (error) {
		return (
			<div className={'container'}>

				<Search className="error" />

				<div className="user-wrap text-center error">
					<p>{message ? message : error}</p>
				</div>
			</div>
		)
	} else if (
		isLoaded === 'loaded' &&
		dataUsers.items &&
		dataUsers.items.length > 0
	) {
		return (
			<div className={'container'}>

				<Search />

				<div className="user-wrap">
					{dataUsers.items.map((user) => {
						return (
							<UserCard
								key={user.id}
								id={user.id}
								repos_url={user.repos_url}
								avatar_url={user.avatar_url}
								login={user.login}
							/>
						)
					})}
				</div>
			</div>
		)
	} else if (isLoaded === 'loading') {
		return (
			<div className={'container'}>

				<Search />

				<div className="user-wrap text-center">
					<p>Searching...</p>
				</div>
			</div>
		)
	} else if (dataUsers.items && dataUsers.items.length === 0) {
		return (
			<div className={'container'}>

				<Search />

				<div className="user-wrap text-center">
					<p>No users found...</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className={'container'}>

				<Search />

				<div className="user-wrap text-center">
					<p>Start typing up there!</p>
				</div>
			</div>
		)
	}
}

export default UserList;