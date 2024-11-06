import React from "react";
import Carrousel from "../Carrousel";
import { Clients } from "../Carrousel/text";
import { S } from "./styles";

export default function Cliente() {
	return (
		<S.Container>
			<S.Main>
				<h3>Conselho de quem conhece</h3>
				<h1>Cada cliente importa!</h1>
				<S.Paragraph>
					Problems trying to resolve the conflict between the two major realms
					of Classical physics: Newtonian mechanics{" "}
				</S.Paragraph>
				<Carrousel items={Clients} />
			</S.Main>
		</S.Container>
	);
}
