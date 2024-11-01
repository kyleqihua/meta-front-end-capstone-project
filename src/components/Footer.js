import Logo from '../assets/images/logo.svg';
import Nav from './modules/Nav';
const Footer = () => {
	return (
		<footer>
			<div className="border border-yellow-300">
				<img src={Logo} />
				<h6>Made by Kyle Qihua</h6>
			</div>
			<div className="flex justify-between">
				<div>
					<h6>Navigation</h6>
					<Nav variant="footer" />
				</div>
				<div>
					<h6>Content</h6>
					<p>Address</p>
					<p>Phone number</p>
					<p>Email</p>
				</div>
				<div>
					<h6>Social Media Links</h6>
					<p>Address</p>
					<p>Phone number</p>
					<p>Email</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
