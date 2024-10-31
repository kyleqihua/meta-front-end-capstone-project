import AboutPage from './AboutPage';
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';
import ReservationsPage from './ReservationsPage';
import Specials from './Specials';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="/menu" element={<MenuPage />}></Route>
				<Route path="/reservations" element={<ReservationsPage />}></Route>
				<Route path="/order-online" element={<OrderOnlinePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
			</Routes>
			{/* <CallToAction />
			<Specials />
			<CustomersSay />
			<Chicago /> */}
		</main>
	);
};
export default Main;
