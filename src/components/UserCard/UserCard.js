import React from 'react';

// -- Import avatar
import avatar from '../../media/avatar.jfif'

// -- React router dom
import { Link } from 'react-router-dom';

// -- Custom style
import './UserCard.scss'


/**
 * Renders single card to display info about user
 * 
 * @param {object} props passed user data
 * @returns {JSX}
 */
const UserCard = (props) => {
	// console.log('Unutar', props)

	// -- Destructure data passed
	const {
		avatar_url,
		login
	} = props;

	return (
		<div className={'user-card'}>
			<div className="user-card__avatar">
				<img src={avatar_url ? avatar_url : avatar} alt="" />
			</div>

			<div className="user-cart__bio">
				<h2>{login ? login : 'Username'}</h2>

				<Link to={{
					pathname: `repo/${login}`,
					username: login
				}}>
					User Repos
				</Link>
			</div>

			<div className="user-card__action">

			</div>
		</div>
	);
}

export default UserCard;