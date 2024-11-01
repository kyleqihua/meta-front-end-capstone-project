import Salad from '../assets/images/greek salad.jpg';
import RestaurantFood from '../assets/images/restauranfood.jpg';
const CallToAction = () => {
	return (
		<section className="h-72 mt-1 bg-primary1 -mx-3" aria-label="Hero Section">
			<div className="p-4 h-full">
				<header className="h-1/3">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
				</header>
				<article className="flex h-2/3 justify-between border-yellow-300 border">
					<main className="flex flex-col border border-yellow-300 gap-4">
						<p>
							We are a family owned Mediterranean restaurant, focused on
							traditional recipes served with a modern twist.
						</p>

						<button
							className="bg-primary2 px-3 py-1 rounded-full self-start"
							aria-label="Reserve a table at Little Lemon"
						>
							Reserve a table
						</button>
					</main>
					<img
						src={RestaurantFood}
						className="w-32 aspect-square self-start rounded-lg object-cover"
						alt="Greek salad with fresh vegetables"
					/>
				</article>
			</div>
		</section>
	);
};
export default CallToAction;
