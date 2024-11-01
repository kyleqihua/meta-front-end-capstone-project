import Restaurant from '../assets/images/restaurant.jpg';
const Chicago = () => {
	return (
		<section>
			<p>
				Little Lemon is a charming and vibrant Mediterranean bistro located in
				the heart of Chicago. Known for its fresh and flavorful dishes, the
				restaurant emphasizes healthy and delicious cuisine made with
				high-quality ingredients. Guests can enjoy a warm, inviting atmosphere
				perfect for casual dining or special occasions.
			</p>
			<img src={Restaurant} className="rounded-lg" />
		</section>
	);
};
export default Chicago;
