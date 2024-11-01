const TestimonalCard = (props) => {
	return (
		<article className="border border-yellow-300 flex justify-between">
			<div className="flex flex-col border border-yellow-300">
				<img
					src={props.image}
					className="w-20 h-15 object-cover rounded-full"
				/>
				{props.name}
			</div>
			<div className="flex flex-col">
				<p>{props.rating}</p>
				<p>{props.review}</p>
			</div>
		</article>
	);
};
export default TestimonalCard;
