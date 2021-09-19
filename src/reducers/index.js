// -- This is redux method for combining multiple 
// -- reucers
import { combineReducers } from 'redux';

// -- Custom reducers
import fetchData from './fetch';
import searchInput from './searchInput';
import loading from './loading';
import error from './error';

// -- Here we combine all the reducers
const AllReducers = combineReducers({
	fetchData,
	searchInput,
	loading,
	error,
});

export default AllReducers;