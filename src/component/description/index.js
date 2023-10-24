import Heading from "../heading/heading";
import "./index.css";

export default function Description({ title, children }) {
	return (
		<div className="description">
			<Heading>{title}</Heading>
			<p className="discription__text">{children}</p>
		</div>
	);
}