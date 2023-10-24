import Box from "../box";
import Heading from "../heading/heading";
import ListItem from "../list-item";
import test from "../test.svg"
import "./index.css";

export default function Property_details({ guests, bedrooms, beds, baths }) {
	return (
		<Box className="property">
			<Heading>Деталі властивості:</Heading>
			<ListItem imageSrc={test}>
				<span className="property__text">{guests}</span>
			</ListItem>
			<ListItem imageSrc={test}>
				<span className="property__text">{bedrooms}</span>
			</ListItem>
			<ListItem imageSrc={test}>
				<span className="property__text">{beds}</span>
			</ListItem>
			<ListItem imageSrc={test}>
				<span className="property__text">{baths}</span>
			</ListItem>

		</Box>
	)
}