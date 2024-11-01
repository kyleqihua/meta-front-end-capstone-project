import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import ReservationsPage from './pages/ReservationsPage';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';

const Main = () => {
	return (
		<main className="min-h-[70vh]">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="/menu" element={<MenuPage />}></Route>
				<Route path="/reservations" element={<ReservationsPage />}></Route>
				<Route path="/order-online" element={<OrderOnlinePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/booking" element={<BookingPage />}></Route>
			</Routes>
		</main>
	);
};
export default Main;
