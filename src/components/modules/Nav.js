import { Link } from 'react-router-dom';
const Nav = (props) => {
	return (
		<nav className={props.variant === 'header' ? 'hidden sm:block' : ''}>
			<ul className={props.variant === 'header' ? 'flex' : 'flex flex-col'}>
				<li>
					<Link to="/" role="button">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" role="button">
						About
					</Link>
				</li>
				<li>
					<Link to="/menu" role="button">
						Menu
					</Link>
				</li>
				<li>
					<Link to="/reservations" role="button">
						Reservations
					</Link>
				</li>
				<li>
					<Link to="/order-online" role="button">
						Order Online
					</Link>
				</li>
				<li>
					<Link to="/login" role="button">
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
