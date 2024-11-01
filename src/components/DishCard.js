const DishCard = (props) => {
	return (
		<article className="border border-yellow-300 flex ">
			<main>
				<h3>{props.name}</h3>
				<p>
					{props.des}
					<p>{props.price}</p>
				</p>
			</main>
			<img
				src={props.image}
				alt={`${props.name} dish`}
				className="w-24 aspect-square self-start object-cover"
			/>
		</article>
	);
};
export default DishCard;
