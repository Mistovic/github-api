import React, { useEffect } from "react";

// -- Reat router
import { Link } from "react-router-dom";

// -- Import redux dispach hook
import { useDispatch, useSelector } from 'react-redux';

// -- Iport action
import {
	_repos,
	_isLoaded,
	_error,
	_loading
} from '../../actions/';



// -- Custom components
import RepoCard from "../../components/RepoCard/RepoCard";

// -- Custom style
import './RepoList.scss';

// -- Import helper function
import CheckError from '../../helper/checkError'

/**
 * RepoList displays all passed repos from user
 * 
 * @returns {JSX} List of Repos
 */
const RepoList = (props) => {

	// -- Destructure props
	const { id } = props.match.params;

	// -- Dispach hook
	const dispach = useDispatch();

	// -- Get repos state
	const repos = useSelector(state => state.fetchData);

	// -- Loading state
	const isLoaded = useSelector(state => state.loading);

	// -- Error
	const error = useSelector(state => state.error);

	// -- Here we need to fetch data from github api and then store it in redux
	// -- State
	useEffect(() => {
		dispach(_loading());
		fetch(`https://api.github.com/users/${id}/repos`)
			.then(CheckError)
			.then(response => {
				dispach(_repos(response));
				dispach(_isLoaded());
			})
			.catch(err => {
				// -- Fetch not working well with response statuses so we need to handle response like this
				err.json().then(errorMessage => {
					// -- End loading
					dispach(_isLoaded());
					// -- Set Error
					dispach(_error(errorMessage));
				})
			});
	}, [id, dispach]);


	if (error) {
		return (
			<div className={'container'}>
				<div className="wrapper">
					<Link to={'/'} className='btn-secondary'>
						Back
					</Link>
				</div>

				<div className="repo-heading">
					<h1>{error.message ? error.message : 'Error getting repos!' }.</h1>
				</div>

				<div className={"repo-list no-items"}>
					{/* <p>This user does not have any repos.</p> */}
				</div>
			</div>
		)
	} else if (isLoaded === 'loaded' && repos && repos.length > 0) {
		return (
			<div className={'container'}>
				<div className="wrapper">
					<Link to={'/'} className='btn-secondary'>
						Back
					</Link>
				</div>

				<div className="repo-heading">
					<h1>All Repos</h1>
				</div>

				<div className={"repo-list"}>
					{repos.map(repo => {
						let license = "";
						if (repo.license) {
							license = repo.license
						}

						return (
							<RepoCard
								key={repo.id}
								name={repo.name}
								description={repo.description}
								forks_count={repo.forks_count}
								stargazers_count={repo.stargazers_count}
								html_url={repo.html_url}
								license={license}
							/>
						)
					})}
				</div>
			</div>
		)
	} else if (isLoaded === 'loading') {
		return (
			<div className={'container'}>
				<div className="wrapper">
					<Link to={'/'} className='btn-secondary'>
						Back
					</Link>
				</div>

				<div className="repo-heading">
					<h1>All repos</h1>
				</div>

				<div className={"repo-list no-items"}>
					<p>Loading...</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className={'container'}>
				<div className="wrapper">
					<Link to={'/'} className='btn-secondary'>
						Back
					</Link>
				</div>

				<div className="repo-heading">
					<h1>No repos at all</h1>
				</div>

				<div className={"repo-list no-items"}>
					<p>This user does not have any repos.</p>
				</div>
			</div>
		)
	}


}

export default RepoList;