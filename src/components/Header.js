import Logo from '../assets/images/logo.svg';
import Hamburger from '../assets/icons/🦆 icon _hamburger menu.svg';
import Basket from '../assets/icons/Basket.svg';
import Nav from './modules/Nav.js';

const Header = () => {
	return (
		<header className="flex justify-between">
			<img src={Hamburger} alt="hamburger menu icon" />
			<img src={Logo} alt="logo" className="border" />
			<img src={Basket} alt="basket icon" />
			<Nav variant="header" />
		</header>
	);
};
export default Header;
