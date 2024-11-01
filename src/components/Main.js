import AboutPage from './pages/AboutPage';
import CallToAction from './modules/CallToAction';
import Chicago from './modules/Chicago';
import CustomersSay from './modules/CustomersSay';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import ReservationsPage from './pages/ReservationsPage';
import Specials from './modules/Specials';
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
		</main>
	);
};
export default Main;
