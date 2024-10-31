import Logo from '../Logo.svg';
import Nav from './Nav.js';

const Header = () => {
	return (
		<header className="flex justify-between">
			<img src={Logo} alt="logo" className="border-2" />
			<Nav />
		</header>
	);
};
export default Header;
