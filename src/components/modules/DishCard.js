const DishCard = (props) => {
	return (
		<article className="mt-6 flex my-4">
			<div>
				<h3 className="text-lg font-bold">{props.name}</h3>
				<p className="">
					<p className="  text-highlight2 h-12 overflow-hidden mr-2">
						{props.des}
					</p>
					<p className="text-lg">{props.price}</p>
				</p>
			</div>
			<img
				src={props.image}
				alt={`${props.name} dish`}
				className="w-24 aspect-square self-start object-cover"
			/>
		</article>
	);
};
export default DishCard;
