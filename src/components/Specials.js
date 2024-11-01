import DishCard from './DishCard';
import Salad from '../assets/images/greek salad.jpg';
import Bruchetta from '../assets/images/bruchetta.svg';
import LemonDessert from '../assets/images/lemon dessert.jpg';

const Specials = () => {
	return (
		<section>
			<p>ORDER FOR DELIVERY!</p>
			<article className="flex justify-between">
				<button>Lunch</button>
				<button>Mains</button>
				<button>Desserts</button>
				<button>A La Carte</button>
				<button>Spaghetti</button>
			</article>
			<hr />
			<DishCard
				name="Greek Salad"
				des="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
				price="$12.99"
				image={Salad}
			/>
			<DishCard
				name="Bruchetta"
				des="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
				price="$5.99"
				image={Bruchetta}
			/>
			<DishCard
				name="Lemon Dessert"
				des="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
				price="$5.99"
				image={LemonDessert}
			/>
		</section>
	);
};
export default Specials;
