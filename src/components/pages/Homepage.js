import CallToAction from '../modules/CallToAction';
import Chicago from '../modules/Chicago';
import CustomersSay from '../modules/CustomersSay';
import Specials from '../modules/Specials';

const Homepage = () => {
	return (
		<div>
			<CallToAction />
			<Specials />
			<CustomersSay />
			<Chicago />
		</div>
	);
};
export default Homepage;
