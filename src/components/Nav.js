const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href="/" role="button">
						Home
					</a>
				</li>
				<li>
					<a href="/about" role="button">
						About
					</a>
				</li>
				<li>
					<a href="/menu" role="button">
						Menu
					</a>
				</li>
				<li>
					<a href="/reservations" role="button">
						Reservations
					</a>
				</li>
				<li>
					<a href="/order-online" role="button">
						Order Online
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;