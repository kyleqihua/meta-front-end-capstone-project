import TestimonalCard from './TestimonalCard';
import Charles from '../assets/images/image.webp';

const CustomersSay = () => {
	return (
		<section>
			<h4>Testimonials</h4>
			<TestimonalCard
				rating="⭐️⭐️⭐️⭐️⭐️"
				name="Christina"
				review="Highly recommended!! Will come here next time without my supervisor"
				image={Charles}
			/>
			<TestimonalCard
				rating="⭐️⭐️⭐️⭐️⭐️"
				name="Christina"
				review="Highly recommended!! Will come here next time without my supervisor"
				image={Charles}
			/>
			<TestimonalCard
				rating="⭐️⭐️⭐️⭐️⭐️"
				name="Christina"
				review="Highly recommended!! Will come here next time without my supervisor"
				image={Charles}
			/>
			<TestimonalCard
				rating="⭐️⭐️⭐️⭐️⭐️"
				name="Christina"
				review="Highly recommended!! Will come here next time without my supervisor"
				image={Charles}
			/>
		</section>
	);
};
export default CustomersSay;
