import { useState } from "react";

const BookingForm = () => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("17:00");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Birthday");
	const [availableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);

	return (
		<form className="flex flex-col max-w-48 gap-5">
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				id="res-date"
				value={date}
				onChange={(event) => setDate(event.target.value)}
			/>
			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				value={time}
				onChange={(event) => setTime(event.target.value)}
			>
				{availableTimes.map((timeSlot) => (
					<option key={timeSlot}>{timeSlot}</option>
				))}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min={1}
				max={10}
				id="guests"
				onChange={(event) => {
					setGuests(event.target.value);
				}}
				value={guests}
			/>
			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				onChange={(event) => {
					setOccasion(event.target.value);
				}}
				value={occasion}
			>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input type="submit" value="Make your reservation" />
		</form>
	);
};

export default BookingForm;
