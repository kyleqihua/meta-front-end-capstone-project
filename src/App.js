import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div role="application" className="mx-4 mt-2 border h-screen">
				<Header />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
