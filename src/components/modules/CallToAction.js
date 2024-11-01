// import Salad from "../../assets/images/greek salad.jpg";
import RestaurantFood from "../../assets/images/restauranfood.jpg";
const CallToAction = () => {
	return (
		<section
			className="h-72 mt-1 rounded-md bg-primary1 -mx-3"
			aria-label="Hero Section"
		>
			<div className="p-4 h-full">
				<header className="h-1/3">
					<h1 className="text-5xl text-primary2 font-markazi">Little Lemon</h1>
					<h2 className="text-3xl text-highlight1 font-markazi">Chicago</h2>
				</header>
				<article className="flex h-2/3 justify-between">
					<main className="flex flex-col font-karla gap-8 pr-4">
						<p className=" text-highlight1">
							We are a family owned Mediterranean restaurant, focused on
							traditional recipes served with a modern twist.
						</p>

						<button
							className="bg-primary2 px-3 py-1 rounded-full self-start font-bold"
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
