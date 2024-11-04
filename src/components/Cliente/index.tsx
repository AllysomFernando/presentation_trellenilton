import React from "react";
import Carrousel from "../Carrousel";
import { Clients } from "../Carrousel/text";

export default function Cliente() {
	return (
		<div>
			<h3>Conselho de quem conhece</h3>
			<h1>Cada cliente importa!</h1>
			<p>
				Problems trying to resolve the conflict between the two major realms of
				Classical physics: Newtonian mechanics{" "}
			</p>
			<Carrousel items={Clients} />
		</div>
	);
}
