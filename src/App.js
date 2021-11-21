import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// -- React router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// -- Import custom actions
// import { getUsers } from './actions/';

// -- Custom views
import UserList from './views/UserList/UserList';
import RepoList from './views/RepoList/RepoList';

// -- Custom components
import Header from './components/Header/Header'

// -- CustomStyles
import './Main.scss';


function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				
				<Switch>
					<Route path="/"   >
						<UserList />
					</Route>

					<Route path="/repo/:id" component={RepoList} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
export default App;
